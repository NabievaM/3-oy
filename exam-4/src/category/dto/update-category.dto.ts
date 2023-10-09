import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Electronics', description: 'category for market' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
