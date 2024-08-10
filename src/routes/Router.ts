import { Router } from "express";
import { medicineRouter } from "./medicineRoutes";
import { patientRouter } from "./patientRoutes";
import { prescriptionRouter } from "./prescriptionRouter";

const router = Router()

router.use("/medicine", medicineRouter)
router.use("/patient", patientRouter)
router.use("/prescription", prescriptionRouter)


export default router