import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttrs {
  username: string;
  hashed_password: string;
  telegram_link: string;
  email: string;
  admin_photo: string;
  is_creater: boolean;
  is_active: boolean;
  hashed_refresh_token: string;
}
@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Mukhlis',
    description: 'Admin username mi',
  })
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @ApiProperty({
    example: 'parol',
    description: 'Admin paroli',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: 'link',
    description: 'Admin telegram linki',
  })
  @Column({
    type: DataType.STRING,
  })
  telegram_link: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Admin emaili',
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: 'admin_photo',
    description: 'Admin rasmi',
  })
  @Column({
    type: DataType.STRING,
  })
  admin_photo: string;

  @ApiProperty({
    example: 'false',
    description: 'Adminga yaratish huquqi',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creater: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Admin tasdiqlangan holati',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'token',
    description: 'Admin tokeni',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;
}
