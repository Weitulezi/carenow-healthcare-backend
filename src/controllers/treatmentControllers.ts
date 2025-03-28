import { Request, Response } from "express";

export const treatmentController = async (req: Request, res: Response) => {
    res.status(201).json({"message": "Hello world"})
}