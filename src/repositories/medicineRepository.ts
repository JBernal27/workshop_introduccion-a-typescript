import { Medicine } from "../models";
import { injectable } from "tsyringe";

@injectable()
export default class MedicineRepository {

    async create(medicine: Partial<Medicine>) {
        return await Medicine.create(medicine);
    }
    async findAll() {
        return await Medicine.findAll()
    }

    async findById(id:number) {
        return await Medicine.findByPk(id)
    }

    async chageQuantity (id:number,quantity:number) {
        return await Medicine.update({quantity},{ where: {id},returning: true})
    }
}