import { Request, Response } from "express";
import { DescriptionService, PrescriptionService, TreatmentService } from "../services/treatment";

interface treatmentReqBody {
    user_id : number,
    descriptions: number[],
    prescriptions: number[],
    cost: number,
    schedule: string
}

export const createTreatmentController = async (req: Request, res: Response) => {
    const data: treatmentReqBody = req.body
    const service = new TreatmentService()

    try {
        await service.createTreatment(data)
        res.status(201).json({"message": "successfully created"})
    } catch(err) {
        res.status(400).json({"message": "failed to create treatment"})
    }
}

export const getAllDescriptionController = async (req: Request, res: Response) => {
    const service = new DescriptionService()

    try {
        const descriptions = await service.getAllDescription()
        res.status(201).json({descriptions})
    } catch(err) {
        res.status(400).json({"message": "failed to fetch descriptions"})
    }
}

export const getAllPrescriptionController = async (req: Request, res: Response) => {
    const service = new PrescriptionService()

    try {
        const prescriptions = await service.getAllPrescription()
        res.status(201).json({prescriptions})
    } catch(err) {
        res.status(400).json({"message": "failed to fetch prescriptions"})
    }
}