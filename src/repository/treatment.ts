import { pool, insertOne } from "../database/connect"

export class TreatmentRepository {
    async createTreatment(payload: Parameters<typeof insertOne>[1]) {
        try {
            await insertOne(pool, payload)
        } catch(err) {
            throw err
        }
    }
}