import PatientRepository from "../repositories/patientRepository";
import { Medicine, Patient } from "../models";
import { inject, injectable } from "tsyringe";

@injectable()
export default class PatientService {
    constructor(@inject(PatientRepository) private patientRepocitory: PatientRepository) { }

    async create(patient: Patient) {
        return await this.patientRepocitory.create(patient)
    }

    async all() {
        return await this.patientRepocitory.findAll()
    }

    async findById(id: number) {
        const patient = await this.patientRepocitory.findById(id)
        if (patient){ return patient } else throw new Error("No extiste un paciente con ese ID")
    }
}