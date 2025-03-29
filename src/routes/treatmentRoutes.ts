import express, {  Router } from "express";
import { createTreatmentController } from "../controllers/treatmentControllers";

const router: Router = express.Router()

router.post("/treatments", createTreatmentController)

export default router
