import express, {  Router } from "express";
import { treatmentController } from "../controllers/treatmentControllers";

const router: Router = express.Router()

router.post("/treatments", treatmentController)

export default router
