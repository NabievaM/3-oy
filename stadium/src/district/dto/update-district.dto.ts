import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDistrictDto {
  @ApiProperty({ example: 'District', description: 'District' })
  @IsString()
  @IsNotEmpty()
  name?: string;
}
