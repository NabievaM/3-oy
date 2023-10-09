import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddMoneyDto {
  @ApiProperty({ example: '100.000.000', description: 'amount money' })
  @IsString()
  @IsNotEmpty()
  amount_money: string;
}
