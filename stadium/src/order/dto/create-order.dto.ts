import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: '08:24:03', description: 'Date' })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: 'true', description: 'Order activity' })
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
