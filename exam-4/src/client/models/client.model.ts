import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Wallet } from '../../client_wallet/models/client_wallet.model';
import { Basket } from '../../basket/models/basket.model';
import { Order } from '../../order/models/order.model';

interface ClientAttrs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  passport: string;
  address: string;
  is_active: boolean;
  hashed_refresh_token: string;
}
@Table({ tableName: 'clients' })
export class Client extends Model<Client, ClientAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Muhlisaxon', description: 'Client`s name' })
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @ApiProperty({
    example: 'Nabieva',
    description: 'Client`s lastname',
  })
  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Client`s email',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: 'parol',
    description: 'Client`s password',
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: '(90)123-45-67',
    description: 'Client`s phone number',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: '1767349785785',
    description: 'Client`s passport',
  })
  @Column({
    type: DataType.STRING,
  })
  passport: string;

  @ApiProperty({
    example: 'Tashkent Mirzo Ulugbek ',
    description: 'Client`s address',
  })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({
    example: 'false',
    description: 'Client verified status',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'token',
    description: 'Client`s token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;

  @HasMany(() => Wallet)
  wallet: Wallet[];

  @HasMany(() => Basket)
  basket: Basket[];

  @HasMany(() => Order)
  order: Order[];
}
