import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Region } from 'src/region/models/region.model';
import { BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface DistrictAttrs {
  name: string;
}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'District', description: 'District' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  region_id: number;

  @BelongsTo(() => Region)
  region: Region;

  @HasMany(() => Stadium)
  stadium: Stadium[];
}
