import { Client} from 'pg'
import dotenv from 'dotenv'

dotenv.config();

export const client = new Client({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_NAME
});