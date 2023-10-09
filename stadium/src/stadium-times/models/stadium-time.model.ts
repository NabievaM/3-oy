import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface TimeAttrs {
  start_time: string;
  end_time: string;
  price: string;
}
@Table({ tableName: 'stadium_time' })
export class Time extends Model<Time, TimeAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '16:00', description: 'start time' })
  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @ApiProperty({
    example: '22:00',
    description: 'end time',
  })
  @Column({
    type: DataType.STRING,
  })
  end_time: string;

  @ApiProperty({
    example: '100.000',
    description: 'Stadionni soat narxi',
  })
  @Column({
    type: DataType.STRING,
  })
  price: string;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  stadium_id: number;

  @BelongsTo(() => Stadium)
  stadium: Stadium;
}
