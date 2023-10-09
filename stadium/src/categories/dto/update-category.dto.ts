import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriesDto {
  @ApiProperty({ example: 'Category', description: 'Category name' })
  @IsString()
  @IsNotEmpty()
  name?: string;
}
