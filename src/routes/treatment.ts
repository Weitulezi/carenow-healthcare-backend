import express, {  Router } from "express";
import { createTreatmentController, getAllDescriptionController } from "../controllers/treatment";

const router: Router = express.Router()

router.post("/treatments", createTreatmentController)
router.get("/descriptions", getAllDescriptionController)

export default router
