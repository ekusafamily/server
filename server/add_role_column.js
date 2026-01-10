
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function migrate() {
    try {
        console.log("Adding role column...");
        await pool.query(`
            ALTER TABLE registration 
            ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'member';
        `);
        console.log("Role column added.");

        // Optional: Set a specific user as admin for testing if they exist
        // Replace with a known email or leave as is to manually update later
        /*
        await pool.query(`
            UPDATE registration 
            SET role = 'admin' 
            WHERE email = 'testadmin@test.com';
        `);
        */

    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        await pool.end();
    }
}

migrate();
