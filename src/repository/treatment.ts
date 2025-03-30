interface TreatmentData {
    user_id : number,
    descriptions: number[],
    prescriptions: number[],
    schedule: string
}

export class TreatmentRepository {
    async createTreatment(payload: TreatmentData) {
        try {
            console.log(payload)
        } catch(err) {
            throw err
        }
    }
}