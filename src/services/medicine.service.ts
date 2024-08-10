import { Medicine } from "../models";
import MedicineRepository from "../repositories/medicineRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class MedicineService {
    constructor(@inject(MedicineRepository) private medicineRepocitory: MedicineRepository) { }

    async create(medicine: Medicine) {
        return await this.medicineRepocitory.create(medicine)
    }

    async all() {
        return await this.medicineRepocitory.findAll()
    }

    async findById(id: number) {
        const medicine = await this.medicineRepocitory.findById(id)
        if (medicine) { return medicine } else throw new Error("No extiste una medicina con ese ID")
    }

    async changeQuantity(actualMedicine: Medicine) {
        const medicine: Medicine = await this.findById(actualMedicine.id)
        if (medicine.quantity >= actualMedicine.quantity) {
            return await this.medicineRepocitory.chageQuantity(actualMedicine.id, medicine.quantity - actualMedicine.quantity)
        } else if (medicine) {
            throw new Error("La cantidad que intenta disminuir es mayor a la cantidad disponible")
        }
    }
}