import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { FuelType } from "src/fuel_types/models/fuel_types.model";
import { StationBranch } from "src/gas_station_branch/models/gas_station_branch.model";

interface GasStationFuelTypeCreationAttr {
    gas_station_branch_id: number;
    fuel_type_id: number;
    price: string;
    is_here: boolean;
}

@Table({ tableName: "gasstationfueltype" })
export class GasStationFuelType extends Model<GasStationFuelType, GasStationFuelTypeCreationAttr> {
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
    price: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_here: boolean;

    @ForeignKey(() => FuelType)
    @Column({ type: DataType.INTEGER })
    fuel_type_id: number

    @BelongsTo(() => FuelType)
    fuel_types: FuelType[];

    @ForeignKey(() => StationBranch)
    @Column({ type: DataType.INTEGER })
    gas_station_branch_id: number

    @BelongsTo(() => StationBranch)
    station_branches: StationBranch[];
};