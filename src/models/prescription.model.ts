import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import { Medicine } from "./medicines.model";
import { Patient } from "./patient.model";

@Table({
    tableName: "prescriptions",
    timestamps: true,
})
export class Prescription extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    dosis!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    frecuencia!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    duracion!: string;

    @ForeignKey(() => Patient)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    patientId!: number;

    @BelongsTo(() => Patient)
    patient!: Patient;

    @ForeignKey(() => Medicine)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    medicineId!: number;

    @BelongsTo(() => Medicine)
    medicine!: Medicine;
}
