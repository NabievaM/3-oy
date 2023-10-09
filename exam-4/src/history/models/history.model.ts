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
import { Order } from '../../order/models/order.model';

interface HistoryAttrs {
  payment_method: string;
  is_active: boolean;
}

@Table({ tableName: 'History' })
export class History extends Model<History, HistoryAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Card', description: 'Payment method' })
  @Column({
    type: DataType.STRING,
  })
  payment_method: string;

  @ApiProperty({ example: 'false', description: 'History is closed' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  order_id: number;

  @BelongsTo(() => Order)
  order: Order;
}
