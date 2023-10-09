import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
  @ApiProperty({ example: 'Card', description: 'Payment method' })
  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @ApiProperty({ example: 'false', description: 'History is closed' })
  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;
}
