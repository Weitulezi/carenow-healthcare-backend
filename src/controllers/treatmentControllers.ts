import { Request, Response } from "express";

export const createTreatmentController = async (req: Request, res: Response) => {
    const data = req.body
    res.status(201).json({"message": "Hello world"})
}