import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsPhoneNumber, IsNumber } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty({ example: 'Humo', description: 'Karta nomi' })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({
    example: '+998(91)123-45-67',
    description: 'Karta tel raqami',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone?: string;

  @ApiProperty({
    example: '0192837465817364',
    description: 'Karta raqami',
  })
  @IsNotEmpty()
  @IsString()
  number?: string;

  @ApiProperty({
    example: '2021',
    description: 'Karta yili',
  })
  @IsNotEmpty()
  @IsString()
  year?: string;

  @ApiProperty({
    example: 'April',
    description: 'Karta oyi',
  })
  @IsNotEmpty()
  @IsString()
  month?: string;

  @ApiProperty({
    example: 'True',
    description: 'Karta aktivligi',
  })
  @IsNotEmpty()
  is_active?: boolean;

  @ApiProperty({
    example: 'True',
    description: 'Karta asosiyligi',
  })
  @IsNotEmpty()
  is_main?: boolean;
}
