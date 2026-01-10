
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function addConstraints() {
    const client = await pool.connect();
    try {
        console.log("Applying constraints...");

        // 1. Email
        try {
            await client.query('ALTER TABLE registration ADD CONSTRAINT registration_email_key UNIQUE (email)');
            console.log("✅ Added unique constraint for email");
        } catch (err) {
            if (err.code === '42710') {
                console.log("ℹ️  Constraint for email already exists");
            } else {
                console.error("❌ Failed to add email constraint:", err.message);
            }
        }

        // 2. ID Number
        try {
            await client.query('ALTER TABLE registration ADD CONSTRAINT registration_id_number_key UNIQUE (id_number)');
            console.log("✅ Added unique constraint for id_number");
        } catch (err) {
            if (err.code === '42710') {
                console.log("ℹ️  Constraint for id_number already exists");
            } else {
                console.error("❌ Failed to add id_number constraint:", err.message);
            }
        }

        // 3. Phone (New)
        try {
            await client.query('ALTER TABLE registration ADD CONSTRAINT registration_phone_key UNIQUE (phone)');
            console.log("✅ Added unique constraint for phone");
        } catch (err) {
            if (err.code === '42710') {
                console.log("ℹ️  Constraint for phone already exists");
            } else {
                console.error("❌ Failed to add phone constraint (check for duplicate phones in DB):", err.message);
            }
        }

    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        client.release();
        pool.end();
    }
}

addConstraints();
