import { error } from "console";
import { TreatmentRepository } from "../repository/treatment";

export class TreatmentService {
    private treatmentRepository: TreatmentRepository;

    constructor() {
        this.treatmentRepository = new TreatmentRepository()  
    }

    async createTreatment(payload: Parameters<TreatmentRepository["createTreatment"]>[0]) {   
        try {
            this.treatmentRepository.createTreatment(payload)
        } catch(err) {
            throw err
        }
    }
}