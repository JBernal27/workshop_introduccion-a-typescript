import MedicineController from "../controllers/medicineController";
import { Router } from "express";

export const medicineRouter = Router()

medicineRouter.post("/", MedicineController.createMedicine)
medicineRouter.get("/", MedicineController.getAll)
medicineRouter.patch("/", MedicineController.chageQuantity)