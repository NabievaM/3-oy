import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Computer',
    description: 'product name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '2.000.000',
    description: 'Product price',
  })
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty({
    example: 'This computer`s memory 128gb',
    description: 'Product`s  description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: '30',
    description: 'Amount product',
  })
  @IsNotEmpty()
  @IsString()
  qwantity: string;
}
