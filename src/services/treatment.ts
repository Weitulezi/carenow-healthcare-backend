import {
  DescriptionRepository,
  PrescriptionRepository,
  TreatmentRepository,
} from "../repository/treatment";

export class TreatmentService {
  private treatmentRepository: TreatmentRepository;

  constructor() {
    this.treatmentRepository = new TreatmentRepository();
  }

  async createTreatment(
    payload: Parameters<TreatmentRepository["createTreatment"]>[0]
  ) {
    try {
      await this.treatmentRepository.createTreatment(payload);
    } catch (err) {
      throw err;
    }
  }
  async listTreatment(payload: string) {
    try {
      return await this.treatmentRepository.listTreatment(payload);
    } catch (err) {
      throw err;
    }
  }
}

export class DescriptionService {
  private descriptionRepository: DescriptionRepository;

  constructor() {
    this.descriptionRepository = new DescriptionRepository();
  }

  async getAllDescription() {
    try {
      return await this.descriptionRepository.getAllDescription();
    } catch (err) {
      throw err;
    }
  }
}

export class PrescriptionService {
  private prescriptionRepository: PrescriptionRepository;

  constructor() {
    this.prescriptionRepository = new PrescriptionRepository();
  }

  async getAllPrescription() {
    try {
      return await this.prescriptionRepository.getAllPrescription();
    } catch (err) {
      throw err;
    }
  }
}
