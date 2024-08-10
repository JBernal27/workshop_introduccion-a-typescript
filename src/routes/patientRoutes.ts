import PatientController from "../controllers/patientController";
import { Router } from "express";

export const patientRouter = Router()

patientRouter.post("/", PatientController.createPatient)
patientRouter.get("/", PatientController.getAll)
patientRouter.get("/:id", PatientController.getById)