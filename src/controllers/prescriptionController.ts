import { container } from "tsyringe";
import { Request, Response } from "express";
import { Prescription } from "models";
import PrescriptionService from "../services/prescription.service";

export default class PrescriptionController {
  static async createPrescription(req: Request, res: Response) {
    const prescriptionService = container.resolve(PrescriptionService);
    const prescription = await prescriptionService.create(req.body);
    res.status(201).json({
      status: 201,
      data: prescription
    });
  }

  static async getAll( req: Request ,res: Response) {
    const prescriptionService = container.resolve(PrescriptionService);
    const prescription = await prescriptionService.all();
    res.status(200).json({
      status: 200,
      data: prescription
    });
  }

  static async getById(req:Request, res:Response){
    try {
      const prescriptionService = container.resolve(PrescriptionService);
      const prescription = await prescriptionService.findById(Number(req.params.id))
      res.status(200).json({
          status:200,
          data:prescription
      })
      console.log(req);
      
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    }
  }

}