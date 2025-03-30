import { pool } from "../database/client"
import { getAllDescription, insertOneTreatment } from "../database/query"

export class TreatmentRepository {
    async createTreatment(payload: Parameters<typeof insertOneTreatment>[1]) {
        try {
            await insertOneTreatment(pool, payload)
        } catch(err) {
            throw err
        }
    }
}

export class DescriptionRepository {
    async getAllDescription() {
        try {
            return await getAllDescription(pool)
        } catch(err) {
            throw err
        }
    }
}