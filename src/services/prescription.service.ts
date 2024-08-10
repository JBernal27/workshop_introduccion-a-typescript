import PrescriptionRepository from "../repositories/prescriptionRepository";
import { Medicine, Patient, Prescription } from "../models";
import { inject, injectable } from "tsyringe";

@injectable()
export default class PrescriptionService {
    constructor(@inject(PrescriptionRepository) private prescriptionRepocitory: PrescriptionRepository) { }

    async create(prescription: Prescription) {
        return await this.prescriptionRepocitory.create(prescription)
    }

    async all() {
        return await this.prescriptionRepocitory.findAll()
    }

    async findById(id: number) {
        const patient = await this.prescriptionRepocitory.findById(id)
        if (patient){ return patient } else throw new Error("No extiste una prescripcion con ese ID")
    }
}