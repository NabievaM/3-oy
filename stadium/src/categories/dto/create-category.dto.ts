import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty({ example: 'Category', description: 'Category name' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
