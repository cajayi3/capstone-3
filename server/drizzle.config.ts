import 'dotenv/config';

export default {
    out: './src/drizzle/migrations',
    schema: './db/schema',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
};