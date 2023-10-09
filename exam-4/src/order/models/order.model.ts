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
import { Wallet } from '../../client_wallet/models/client_wallet.model';
import { Product } from '../../product/models/product.model';
import { Admin } from '../../admin/models/admin.model';
import { History } from '../../history/models/history.model';

interface OrderAttrs {
  payment_term: string;
  loan_amount: string;
  payment_date: string;
  paid_money: string;
  is_active: boolean;
}

@Table({ tableName: 'Order' })
export class Order extends Model<Order, OrderAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '02.06.2024', description: 'Payment term' })
  @Column({
    type: DataType.STRING,
  })
  payment_term: string;

  @ApiProperty({ example: '50.000.000', description: 'Loan amount' })
  @Column({
    type: DataType.STRING,
  })
  loan_amount: string;

  @ApiProperty({
    example: '1-Aprel',
    description: 'Every first day of the month',
  })
  @Column({
    type: DataType.STRING,
  })
  payment_date: string;

  @ApiProperty({
    example: '1-Aprel',
    description: 'Every first day of the month',
  })
  @Column({
    type: DataType.STRING,
  })
  paid_money: string;

  @ApiProperty({
    example: 'false',
    description: 'Payment completed',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  client_id: number;

  @BelongsTo(() => Client)
  client: Client;

  @ForeignKey(() => Wallet)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  client_wallet_id: number;

  @BelongsTo(() => Wallet)
  client_wallet: Wallet;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  admin_id: number;

  @BelongsTo(() => Admin)
  admin: Admin;

  @HasMany(() => History)
  history: History[];
}
