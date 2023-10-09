import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    example: 'Muhlisaxon',
    description: 'Client name',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Nabieva',
    description: 'Client lastname',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'mukhlis@gmail.com',
    description: 'Client`s email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Client`s password',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Client`s phone number',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: '8177488938973',
    description: 'Client`s passport',
  })
  @IsNotEmpty()
  @IsString()
  passport: string;

  @ApiProperty({
    example: 'Uzbekistan Tashkent chilonzor dom-10',
    description: 'Client`s address',
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}
