import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class LoginAdminDto {
  @ApiProperty({
    example: 'user1@gmail.com',
    description: 'Admin elektron pochtasi',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Admin paroli',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
