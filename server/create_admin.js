
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function createAdmin() {
    try {
        const email = "admin@ekusa.top";
        const password = "123456";

        console.log(`Creating admin user: ${email}`);

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check if user exists
        const check = await pool.query("SELECT * FROM registration WHERE email = $1", [email]);
        if (check.rows.length > 0) {
            console.log("User already exists. Updating role to admin...");
            await pool.query("UPDATE registration SET role = 'admin', password = $1 WHERE email = $2", [hashedPassword, email]);
        } else {
            console.log("Creating new admin user...");
            await pool.query(
                `INSERT INTO registration (first_name, last_name, email, phone, id_number, county, password, role)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                ["Super", "Admin", email, "0700000000", "00000000", "Nairobi City", hashedPassword, "admin"]
            );
        }

        console.log("Admin account created successfully.");

    } catch (error) {
        console.error("Failed to create admin:", error);
    } finally {
        await pool.end();
    }
}

createAdmin();
