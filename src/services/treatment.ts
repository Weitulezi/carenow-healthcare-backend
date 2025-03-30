import { TreatmentRepository } from "../repository/treatment";

export class TreatmentService {
    private treatmentRepository: TreatmentRepository;

    constructor() {
        this.treatmentRepository = new TreatmentRepository()  
    }

    async createTreatment(payload: Parameters<TreatmentRepository["createTreatment"]>[0]) {   
        try {
            await this.treatmentRepository.createTreatment(payload)
        } catch(err) {
            throw err
        }
    }
}