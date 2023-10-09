import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class PhoneUserDto {
  @ApiProperty({
    example: '998906786767',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
}
