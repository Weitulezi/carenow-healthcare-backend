import { Pool} from 'pg'
import dotenv from 'dotenv'

dotenv.config();

interface TreatmentData {
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
	const client = await pool.connect(); // Get a client from the pool
	
	try {
		const queryString = `
			INSERT INTO user_treatments
				(user_id, cost, schedule, created_at, updated_at)
			values
				($1, $2, $3, NOW(), NOW()) RETURNING user_treatment_id;
		`
		  const result = await client.query(queryString, [payload.user_id, payload.cost, payload.schedule]); // Execute query
		  return result.rows; // Return rows
	} catch (err) {
	  throw err;
	} finally {
	  client.release(); // Release the client back to the pool
	}
}