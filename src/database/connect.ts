import { Pool} from 'pg'
import dotenv from 'dotenv'
import { buildInsertOneTreatmentQueryString } from '../libs/query';

dotenv.config();

export interface TreatmentData {
    user_id : number,
    descriptions: number[],
    prescriptions: number[],
    cost: number
    schedule: string
}

export const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_NAME
});

export const insertOne = async (pool: Pool,  payload: TreatmentData) => {
	const client = await pool.connect();
	
	try {
		const queryString = buildInsertOneTreatmentQueryString(payload)
		await client.query(
			queryString, 
			[
				payload.user_id, 
				payload.cost, 
				payload.schedule, 
				...payload.descriptions, 
				...payload.prescriptions
			]
		)
	} catch (err) {
		throw err;
	} finally {
		client.release(); // Release the client back to the pool
	}
}