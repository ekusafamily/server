
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function addPasswordColumn() {
    const client = await pool.connect();
    try {
        console.log("Adding password column...");
        await client.query('ALTER TABLE registration ADD COLUMN IF NOT EXISTS password TEXT');
        console.log("✅ Added password column");
    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        client.release();
        pool.end();
    }
}

addPasswordColumn();
