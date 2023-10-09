import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBasketDto {
  @ApiProperty({ example: '1', description: 'client id' })
  @IsNumber()
  @IsNotEmpty()
  client_id?: number;

  @ApiProperty({ example: '1', description: 'product id' })
  @IsNumber()
  @IsNotEmpty()
  product_id?: number;
}
