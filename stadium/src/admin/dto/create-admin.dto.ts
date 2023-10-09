import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsEmail,
} from 'class-validator';

export class CreateAdminDto {
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
    example: 'mukhlis@gmail.com',
    description: 'Foydalanuvchi emaili',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '@user',
    description: 'Foydalanuvchi telegrami',
  })
  @IsNotEmpty()
  @IsString()
  telegram_link: string;
}
function unique(): (target: CreateAdminDto, propertyKey: 'username') => void {
  throw new Error('Function not implemented.');
}
