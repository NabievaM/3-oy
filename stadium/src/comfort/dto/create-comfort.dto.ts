import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComfortDto {
  @ApiProperty({ example: 'Comfort zona', description: 'Comfort zona' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
