import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { District } from 'src/district/models/district.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface RegionAttrs {
  name: string;
}

@Table({ tableName: 'region' })
export class Region extends Model<Region, RegionAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Chilonzor hududi', description: 'Stadion hududi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => District)
  district: District[];

  @HasMany(() => Stadium)
  stadium: Stadium[];
}
