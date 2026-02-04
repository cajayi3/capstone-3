import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});
export const db = drizzle(pool);
(async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('Database connected successfully');
    }
    catch (err) {
        console.error('Database connection failed to PostgreSQL:', err);
        process.exit(1);
    }
})();
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
