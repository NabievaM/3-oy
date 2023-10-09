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
import { Client } from '../../client/models/client.model';
import { Order } from '../../order/models/order.model';

interface WalletAttrs {
  amount_money: string;
}

@Table({ tableName: 'wallet' })
export class Wallet extends Model<Wallet, WalletAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '100.000.000', description: 'money' })
  @Column({
    type: DataType.STRING,
  })
  amount_money: string;

  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  client_id: number;

  @BelongsTo(() => Client)
  client: Client;

  @HasMany(() => Order)
  order: Order[];
}
