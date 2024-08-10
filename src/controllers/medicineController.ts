import MedicineService from "../services/medicine.service";
import { container } from "tsyringe";
import { Request, Response } from "express";

export default class MedicineController {
  static async createMedicine(req: Request, res: Response) {
    const medicineService = container.resolve(MedicineService);
    const medicine = await medicineService.create(req.body);
    res.status(201).json({
      status: 201,
      data: medicine
    });
  }

  static async getAll(req: Request, res: Response) {
    const medicineService = container.resolve(MedicineService);
    const medicines = await medicineService.all();
    res.status(200).json({
      status: 200,
      data: medicines
    });
  }

  static async chageQuantity(req: Request, res: Response) {
    try {
      const medicineService = container.resolve(MedicineService)
      await medicineService.changeQuantity(req.body)
      const newMedicine = await medicineService.findById(req.body)
      res.status(214).json({
        status: 214,
        data: newMedicine
      })
    } catch (error) {
      res.status(400).json({
          status: 400,
          message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
  }
  }
}