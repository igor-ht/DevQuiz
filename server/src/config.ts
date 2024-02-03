import { configDotenv } from 'dotenv';

configDotenv();

export const PORT = process.env.PORT;

export const DB_URL = process.env.DB_URL;
