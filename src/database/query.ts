import { Pool} from 'pg'
import { buildInsertOneTreatmentQueryString } from '../libs/sqlQueryBuilder';
import { TreatmentData } from '../models/treatment';

export const insertOneTreatment = async (pool: Pool,  payload: TreatmentData) => {
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

export const getAllDescription = async (pool: Pool) => {
	const client = await pool.connect();
	
	try {
		const queryString = `
			SELECT description_id, name from descriptions;
		`
		const result = await client.query(queryString)
		return result.rows

	} catch (err) {
		throw err;
	} finally {
		client.release(); // Release the client back to the pool
	}
}

export const getAllPrescription = async (pool: Pool) => {
	const client = await pool.connect();
	
	try {
		const queryString = `
			SELECT prescription_id, name from prescriptions;
		`
		const result = await client.query(queryString)
		return result.rows
		
	} catch (err) {
		throw err;
	} finally {
		client.release(); // Release the client back to the pool
	}
}


export const getAllUser = async (pool: Pool) => {
	const client = await pool.connect();
	
	try {
		const queryString = `
			SELECT user_id, name from users;
		`
		const result = await client.query(queryString)
		return result.rows
		
	} catch (err) {
		throw err;
	} finally {
		client.release(); // Release the client back to the pool
	}
}