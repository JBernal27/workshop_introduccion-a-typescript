import { Medicine, Patient, Prescription } from "../models";
import { injectable } from "tsyringe";

@injectable()
export default class PrescriptionRepository {

    async create(prescription: Partial<Prescription>) {
        return await Prescription.create(prescription);
    }
    async findAll() {
        return await Prescription.findAll({
            include: [
                {
                    model: Patient,
                    required: true // Asegura que se realice un INNER JOIN
                },
                {
                    model: Medicine,
                    required: true // Asegura que se realice un INNER JOIN
                }
            ]
        });
    }

    async findById(id:number) {
        return await Prescription.findByPk(id)
    }

}