import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function makeAdmin() {
    const email = process.argv[2];

    if (!email) {
        console.error("Please provide an email address.");
        console.error("Usage: node make_admin.js <email>");
        process.exit(1);
    }

    try {
        console.log(`Upgrading ${email} to admin...`);
        const result = await pool.query(`
            UPDATE registration 
            SET role = 'admin' 
            WHERE email = $1
            RETURNING id, first_name, email, role;
        `, [email]);

        if (result.rowCount === 0) {
            console.log("User not found!");
        } else {
            console.log("Success! User updated:", result.rows[0]);
        }

    } catch (error) {
        console.error("Operation failed:", error);
    } finally {
        await pool.end();
    }
}

makeAdmin();
