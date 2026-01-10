
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function check() {
    try {
        const res = await pool.query('SELECT * FROM registration');
        console.log('Count:', res.rowCount);
        console.log('Rows:', res.rows);
    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}
check();
