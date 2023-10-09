import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Card } from 'src/user_cards/models/user_card.model';
import { Wallet } from 'src/user_wallet/models/user_wallet.model';
import { Stadium } from '../../stadiums/models/stadium.model';
import { Comment } from '../../comments/models/comment.model';

interface UserAttrs {
  first_name: string;
  last_name: string;
  username: string;
  hashed_password: string;
  telegram_link: string;
  email: string;
  phone: string;
  user_photo: string;
  birthday: Date;
  is_owner: boolean;
  is_active: boolean;
  hashed_refresh_token: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user ismi', description: 'Foydalanuvchi ismi' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({
    example: 'user familiyasi',
    description: 'Foydalanuvchi familiyasi',
  })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: 'Mukhlis',
    description: 'Foydalanuvchi username mi',
  })
  @Column({
    type: DataType.STRING,
  })
  username: string;

  @ApiProperty({
    example: 'parol',
    description: 'Foydalanuvchi paroli',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: 'link',
    description: 'Telegram linki',
  })
  @Column({
    type: DataType.STRING,
  })
  telegram_link: string;

  @ApiProperty({
    example: 'user emaili',
    description: 'Foydalanuvchi emaili',
  })
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: '(90)123-45-67',
    description: 'Foydalanuvchi telefon raqami',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'user_photo',
    description: 'Foydalanuvchi rasmi',
  })
  @Column({
    type: DataType.STRING,
  })
  user_photo: string;

  @ApiProperty({
    example: '03.06.07',
    description: 'Foydalanuvchi tug`ilgan sanasi',
  })
  @Column({
    type: DataType.DATE,
  })
  birthday: Date;

  @ApiProperty({
    example: 'false',
    description: 'Maydon egasi yoki yo`qligi',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_owner: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Foydalanuvchi tasdiqlangan holati',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'token',
    description: 'Foydalanuvchi tokeni',
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

  @HasMany(() => Card)
  card: Card[];

  @HasMany(() => Stadium)
  stadium: Stadium[];

  @HasMany(() => Comment)
  comment: Comment[];
}
