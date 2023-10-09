import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Company } from "src/company/models/company.model";

interface BuilderCreationAttr {
    fullName: string;
    birthDay: number;
    salary: string;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, BuilderCreationAttr> {
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

    fullName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    birthDay: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    salary: string;

    @ForeignKey(() => Company)
    @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    companyId: number
    @BelongsTo(() => Company)
    company: Company;
};