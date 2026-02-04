import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import postgres from 'pg';
const migrationClient = new postgres.Client(process.env.DATABASE_URL);
async function main() {
    try {
        await migrationClient.connect();
        console.log('Connected to the database successfully for migrations.');
        await migrate(drizzle(migrationClient), {
            migrationsFolder: './src/server/src/drizzle/migrations'
        });
        await migrationClient.end();
        console.log('Migrations completed successfully.');
    }
    catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
    finally {
        await migrationClient.end();
    }
}
main();
