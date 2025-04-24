import { Pool } from "pg";
import { buildInsertOneTreatmentQueryString } from "../libs/sqlQueryBuilder";
import { TreatmentData } from "../models/treatment";

export const insertOneTreatment = async (
  pool: Pool,
  payload: TreatmentData
) => {
  const client = await pool.connect();

  try {
    const queryString = buildInsertOneTreatmentQueryString(payload);
    await client.query(queryString, [
      payload.user_id,
      payload.cost,
      payload.schedule,
      ...payload.descriptions,
      ...payload.prescriptions,
    ]);
  } catch (err) {
    throw err;
  } finally {
    client.release(); // Release the client back to the pool
  }
};

export const findAllTreatment = async (pool: Pool, payload: string) => {
  const client = await pool.connect();

  try {
    let params: string[] = [];
    let queryString = ``;

    if (payload == "" || payload == undefined) {
      queryString = `
				SELECT
					ut.user_treatment_id as treatment_id,
					us.user_id as user_id,
					name,
					ut.schedule,
					ut.cost,
					ut.created_at as created_at
				FROM
					users us
				INNER JOIN
					user_treatments ut
				ON
					us.user_id = ut.user_id
				;
			`;
    } else {
      queryString = `
				SELECT
					ut.user_treatment_id as treatment_id,
					us.user_id as user_id,
					name,
					ut.schedule,
					ut.cost,
					ut.created_at as created_at
				FROM
					users us
				INNER JOIN
					user_treatments ut
				ON
					us.user_id = ut.user_id AND us.name iLIKE $1
				;
			`;
      params.push(payload);
    }
    const res = await client.query(queryString, params);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release(); // Release the client back to the pool
  }
};

export const getAllDescription = async (pool: Pool) => {
  const client = await pool.connect();

  try {
    const queryString = `
			SELECT description_id, name from descriptions;
		`;
    const result = await client.query(queryString);
    return result.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release(); // Release the client back to the pool
  }
};

export const getAllPrescription = async (pool: Pool) => {
  const client = await pool.connect();

  try {
    const queryString = `
			SELECT prescription_id, name from prescriptions;
		`;
    const result = await client.query(queryString);
    return result.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release(); // Release the client back to the pool
  }
};

export const getAllUser = async (pool: Pool) => {
  const client = await pool.connect();

  try {
    const queryString = `
			SELECT user_id, name from users;
		`;
    const result = await client.query(queryString);
    return result.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release(); // Release the client back to the pool
  }
};
