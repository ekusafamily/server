
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS registration (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    id_number TEXT UNIQUE NOT NULL,
    county TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

async function migrate() {
    try {
        await pool.query(createTableQuery);
        console.log("Table 'registration' created or already exists.");
    } catch (error) {
        console.error("Error creating table:", error);
    } finally {
        pool.end();
    }
}

migrate();
