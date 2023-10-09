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
import { Role } from '../../role/models/role.model';
import { Order } from '../../order/models/order.model';

interface AdminAttrs {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  role_id: number;
  is_active: boolean;
  hashed_refresh_token: string;
}
@Table({ tableName: 'admins' })
export class Admin extends Model<Admin, AdminAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Muhlisaxon', description: 'Admin`s name' })
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @ApiProperty({
    example: 'Nabieva',
    description: 'Admin`s lastname',
  })
  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @ApiProperty({
    example: 'Mukhlis',
    description: 'Admin`s username',
  })
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @ApiProperty({
    example: 'parol',
    description: 'Admin`s password',
  })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Admin`s email',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({
    example: '(90)123-45-67',
    description: 'Admin`s phone number',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'false',
    description: 'Admin verified status',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'token',
    description: 'Admin`s token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  role_id: number;

  @BelongsTo(() => Role)
  role: Role;

  @HasMany(() => Order)
  order: Order[];
}
