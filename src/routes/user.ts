import express, {  Router } from "express";
import { getAllUserController } from "../controllers/user";

const router: Router = express.Router()

router.get("/api/users", getAllUserController)

export default router
