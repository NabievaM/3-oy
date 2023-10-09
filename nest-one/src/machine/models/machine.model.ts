import { Column, DataType, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Company } from "src/company/models/company.model";
import { Driver } from "src/driver/models/driver.model";
import { MachineDriver } from "src/machine_driver/models/machine_driver.model";

interface MachineCreationAttr {
    model: string;
    name: string;
}

@Table({ tableName: "machine" })
export class Machine extends Model<Machine, MachineCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })

    model: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    companyId: number
    @BelongsTo(() => Company)
    company: Company;

    @BelongsToMany(() => Driver, () => MachineDriver)
    drivers: Driver[];
};