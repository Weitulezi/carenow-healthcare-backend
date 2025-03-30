import express, {  Router } from "express";
import { createTreatmentController, getAllDescriptionController, getAllPrescriptionController } from "../controllers/treatment";

const router: Router = express.Router()

router.post("/treatments", createTreatmentController)
router.get("/descriptions", getAllDescriptionController)
router.get("/prescriptions", getAllPrescriptionController)

export default router
