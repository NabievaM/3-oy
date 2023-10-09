import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ComfortStadium } from '../../comfort-stadium/models/comfort-stadium.model';

interface ComfortAttrs {
  name: string;
}

@Table({ tableName: 'comfort' })
export class Comfort extends Model<Comfort, ComfortAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Comfort zona',
    description: 'Comfort zona qo`shish',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => ComfortStadium)
  comfort_Stadium: ComfortStadium[];
}
