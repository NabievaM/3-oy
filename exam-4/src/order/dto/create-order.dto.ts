import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: '02.06.2024', description: 'Payment term' })
  @IsString()
  @IsNotEmpty()
  payment_term: string;

  @ApiProperty({ example: '50.000.000', description: 'Loan amount' })
  @IsString()
  @IsNotEmpty()
  loan_amount: string;

  @ApiProperty({
    example: '1-Aprel',
    description: 'Every first day of the month',
  })
  @IsString()
  @IsNotEmpty()
  payment_date: string;

  @ApiProperty({
    example: '24.000.000',
    description: 'Paid money',
  })
  @IsString()
  @IsNotEmpty()
  paid_money: string;

  @ApiProperty({
    example: 'false',
    description: 'Payment completed',
  })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;
}
