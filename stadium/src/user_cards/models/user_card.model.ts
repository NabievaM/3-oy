import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

interface CardAttrs {
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}
@Table({ tableName: 'cards' })
export class Card extends Model<Card, CardAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Karta nomi', description: 'Foydalanuvchi ismi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: '(90)123-45-67',
    description: 'Karta telefon raqami',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: '123098778901234',
    description: 'Karta raqami',
  })
  @Column({
    type: DataType.STRING,
  })
  number: string;

  @ApiProperty({
    example: '2022',
    description: 'Karta yili',
  })
  @Column({
    type: DataType.STRING,
  })
  year: string;

  @ApiProperty({
    example: 'April',
    description: 'Karta oyi',
  })
  @Column({
    type: DataType.STRING,
  })
  month: string;

  @ApiProperty({
    example: 'false',
    description: 'Karta activligi',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Karta asosiyligi',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
