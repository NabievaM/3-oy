import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { StationBranch } from 'src/gas_station_branch/models/gas_station_branch.model';

interface MainStationCreationAttr {
  main_gas_station_name: string;
}

@Table({ tableName: 'main_station' })
export class MainStation extends Model<MainStation, MainStationCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  main_gas_station_name: string;

  @HasMany(() => StationBranch)
  get_station_branch: StationBranch[];
}
