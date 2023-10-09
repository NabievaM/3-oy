import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsEmail,
  IsPhoneNumber,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user ismi', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'user familiyasi',
    description: 'Foydalanuvchi familiyasi',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'Samira',
    description: 'Foydalanuvchi username mi',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Foydalanuvchi paroli',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    example: 'password',
    description: 'Parolni tasdiqlash',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  confirm_password: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Foydalanuvchi emaili',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '@user',
    description: 'Foydalanuvchi telegrami',
  })
  @IsNotEmpty()
  @IsString()
  telegram_link: string;

  @ApiProperty({
    example: '(90)123-45-67',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsPhoneNumber('UZ')
  phone: string;

  @ApiProperty({
    example: '03.09.88',
    description: 'Foydalanuvchi tug`ilgan sanasi',
  })
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;
}
