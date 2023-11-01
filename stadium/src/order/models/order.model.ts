import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { District } from 'src/district/models/district.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface OrderAttrs {
  date: Date;
  status: boolean;
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, OrderAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '08:24:03', description: 'Date' })
  @Column({
    type: DataType.DATE,
  })
  date: Date;

  @ApiProperty({ example: 'false', description: 'Order activity' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  status: Boolean;
}
