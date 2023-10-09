import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Builder } from "src/builder/models/builder.model";
import { Machine } from "src/machine/models/machine.model";

interface CompanyCreationAttr {
    name: string;
    address: string;
    phone: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr>{
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

    name: string;

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        unique: true,
    })
    phone: string;

    @HasMany(() => Builder)
    builders: Builder[];

    @HasMany(() => Machine)
    machine: Machine[];
};