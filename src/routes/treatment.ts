import express, { Router } from "express";
import {
  createTreatmentController,
  getAllDescriptionController,
  getAllPrescriptionController,
  getAllTreatments,
} from "../controllers/treatment";

const router: Router = express.Router();

router.post("/api/treatments", createTreatmentController);
router.get("/api/treatments", getAllTreatments);
router.get("/api/descriptions", getAllDescriptionController);
router.get("/api/prescriptions", getAllPrescriptionController);

export default router;
