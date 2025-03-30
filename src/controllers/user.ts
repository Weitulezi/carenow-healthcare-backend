import { Request, Response } from "express";
import { UserService } from "../services/user";

export const getAllUserController = async (req: Request, res: Response) => {
    const service = new UserService()

    try {
        const users = await service.getAllUser()
        res.status(201).json(users)
    } catch(err) {
        res.status(400).json({"message": "failed to fetch users"})
    }
}