import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class LoginClientDto {
  @ApiProperty({
    example: 'user1@gmail.com',
    description: 'Client`s email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Client`s password',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
