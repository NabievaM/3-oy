import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { Machine } from "src/machine/models/machine.model";
import { MachineDriver } from "src/machine_driver/models/machine_driver.model";

interface DriverCreationAttr {
    firstName: string;
    lastName: string;
    phone: string;
    driver_license: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, DriverCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })

    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        unique: true,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    driver_license: string;

    @BelongsToMany(() => Machine, () => MachineDriver)
    machine: Machine[];
};