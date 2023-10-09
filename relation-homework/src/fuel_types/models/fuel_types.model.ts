import { Column, DataType, Model, Table, BelongsTo, HasMany } from "sequelize-typescript";
import { GasStationFuelType } from "src/gas_station_fuel_type/models/gas_station_fuel_type.model";
import { FuelTypesModule } from "../fuel_types.module";

interface FuelTypesCreationAttr {
    name: string;
}

@Table({ tableName: "fueltype" })
export class FuelType extends Model<FuelType, FuelTypesCreationAttr>{
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
    
        // @HasMany(() > FuelTypesModule)
        // fuei
    
};