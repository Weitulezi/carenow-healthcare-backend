import { Request, Response } from "express";
import { TreatmentService } from "../services/treatment";

interface treatmentReqBody {
    user_id : number,
    descriptions: number[],
    prescriptions: number[],
    schedule: string
}

export const createTreatmentController = async (req: Request, res: Response) => {
    const data = req.body as treatmentReqBody
    const service = new TreatmentService()

    try {
        await service.createTreatment(data)
        res.status(201).json({"message": "hello world"})
    } catch(err) {
        res.status(400).json({"message": "failed to create treatment"})
    }
}