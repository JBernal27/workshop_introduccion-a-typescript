import { container } from "tsyringe";
import { Request, Response } from "express";
import PatientService from "../services/patient.service";

export default class PatientController {
  static async createPatient(req: Request, res: Response) {
    const patientService = container.resolve(PatientService);
    const patient = await patientService.create(req.body);
    res.status(201).json({
      status: 201,
      data: patient
    });
  }

  static async getAll( req: Request ,res: Response) {
    const patientService = container.resolve(PatientService);
    const patients = await patientService.all();
    res.status(200).json({
      status: 200,
      data: patients
    });
  }

  static async getById(req:Request, res:Response){
    try {
      const patientService = container.resolve(PatientService);
      const patient = await patientService.findById(Number(req.params.id))
      res.status(200).json({
          status:200,
          data:patient
      })
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    }
  }

}