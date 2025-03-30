import express, {  Router } from "express";
import { createTreatmentController } from "../controllers/treatment";

const router: Router = express.Router()

router.post("/treatments", createTreatmentController)

export default router
