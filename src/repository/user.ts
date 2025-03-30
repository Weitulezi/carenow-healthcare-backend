import { pool } from "../database/client"
import { getAllUser } from "../database/query"

export class UserRepository {
    async getAllUser() {
        try {
            return await getAllUser(pool)
        } catch(err) {
            throw err
        }
    }
}