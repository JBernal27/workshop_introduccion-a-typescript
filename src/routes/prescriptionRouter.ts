import PrescriptionController from "../controllers/prescriptionController";
import { Router } from "express";

export const prescriptionRouter = Router()

prescriptionRouter.post("/", PrescriptionController.createPrescription)
prescriptionRouter.get("/", PrescriptionController.getAll)
prescriptionRouter.get("/:id", PrescriptionController.getById)