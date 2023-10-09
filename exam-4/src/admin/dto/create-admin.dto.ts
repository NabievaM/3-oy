import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    example: 'Muhlisaxon',
    description: 'Admin name',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Nabieva',
    description: 'Admin lastname',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Mukhlis',
    description: 'Admin`s username',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Admin`s password',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Admin`s email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Admin`s phone number',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
}
function unique(): (target: CreateAdminDto, propertyKey: 'username') => void {
  throw new Error('Function not implemented.');
}
