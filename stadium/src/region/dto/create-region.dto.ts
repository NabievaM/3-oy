import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRegionDto {
  @ApiProperty({ example: 'Chilonzor hududi', description: 'Stadion hududi' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
