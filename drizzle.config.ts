import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({
    path: './.env.local',
});

export default defineConfig({
    schema: './db/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});