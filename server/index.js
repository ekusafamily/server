
import bcrypt from "bcryptjs";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const logs = [];
const MAX_LOGS = 100;

function logToMemory(type, ...args) {
    const timestamp = new Date().toLocaleTimeString();
    const message = args.map(arg =>
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' ');

    logs.unshift(`[${timestamp}] [${type}] ${message}`);
    if (logs.length > MAX_LOGS) logs.pop();

    // Original console output
    process.stdout.write(`[${type}] ${message}\n`);
}

// Override console methods
console.log = (...args) => logToMemory('INFO', ...args);
console.error = (...args) => logToMemory('ERROR', ...args);

// Logger middleware
app.use((req, res, next) => {
    if (req.url !== '/logs') { // Don't log requests to the log viewer itself
        console.log(`${req.method} ${req.url}`);
    }
    next();
});

// Logs Viewer Endpoint
app.get("/logs", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Server Logs</title>
            <meta http-equiv="refresh" content="2">
            <style>
                body { background: #0d1117; color: #c9d1d9; font-family: monospace; padding: 20px; }
                .log { padding: 4px 0; border-bottom: 1px solid #30363d; white-space: pre-wrap; }
                .INFO { color: #58a6ff; }
                .ERROR { color: #f85149; }
                h1 { margin-top: 0; }
            </style>
        </head>
        <body>
            <h1>Server Logs (Auto-refresh: 2s)</h1>
            <div id="logs">
                ${logs.map(log => {
        const type = log.includes('[ERROR]') ? 'ERROR' : 'INFO';
        return `<div class="log ${type}">${log}</div>`;
    }).join('')}
            </div>
        </body>
        </html>
    `);
});

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// GET endpoint
app.get("/api/registrations", async (req, res) => {
    try {
        console.log("Fetching registrations...");
        const result = await pool.query("SELECT * FROM registration ORDER BY created_at DESC");
        console.log(`Found ${result.rows.length} rows`);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Validation schema
const registrationSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    idNumber: z.string().min(5),
    county: z.string().min(2),
    password: z.string().min(6),
});

// POST endpoint - Register
app.post("/api/register", async (req, res) => {
    try {
        const data = registrationSchema.parse(req.body);

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const result = await pool.query(
            `INSERT INTO registration (first_name, last_name, email, phone, id_number, county, password)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, first_name, last_name, email, county`,
            [data.firstName, data.lastName, data.email, data.phone, data.idNumber, data.county, hashedPassword]
        );

        res.json({ success: true, user: result.rows[0] });
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation error:", JSON.stringify(error.errors, null, 2));
            res.status(400).json({ error: error.errors });
        } else if (error.code === "23505") { // Unique violation
            console.error("Unique violation:", error.detail);
            res.status(409).json({ error: "User already registered (Email, Phone, or ID)" });
        } else {
            console.error("Registration failed:", error.message);
            res.status(500).json({ error: "Internal server error" });
        }
    }
});

// POST endpoint - Login
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(`Login attempt for: ${email}`);

        // Find user
        const result = await pool.query("SELECT * FROM registration WHERE email = $1", [email]);
        if (result.rows.length === 0) {
            console.log("User not found");
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const user = result.rows[0];
        console.log("User found:", user.id);

        if (!user.password) {
            console.log("User has no password set");
            return res.status(401).json({ error: "Account not set up for login. Please contact admin." });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log("Password mismatch");
            return res.status(401).json({ error: "Invalid credentials" });
        }

        console.log("Login successful");
        // Return user info (excluding password)
        res.json({
            success: true,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                county: user.county,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
