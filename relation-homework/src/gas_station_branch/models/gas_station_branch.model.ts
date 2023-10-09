import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { MainStation } from 'src/gas_station/models/gas_station.model';
import { GasStationFuelType } from 'src/gas_station_fuel_type/models/gas_station_fuel_type.model';

interface StationBranchCreationAttr {
  branch_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'stationbranch' })
export class StationBranch extends Model<
  StationBranch,
  StationBranchCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  branch_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone_number: string;

  @ForeignKey(() => MainStation)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  gas_station_id: number;

  @BelongsTo(() => MainStation)
  gasStation: MainStation;
}
