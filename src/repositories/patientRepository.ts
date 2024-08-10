import { Patient } from "../models";
import { injectable } from "tsyringe";

@injectable()
export default class PatientRepository {

    async create(patient: Partial<Patient>) {
        return await Patient.create(patient);
    }
    async findAll() {
        return await Patient.findAll()
    }

    async findById(id:number) {
        return await Patient.findByPk(id)
    }

}