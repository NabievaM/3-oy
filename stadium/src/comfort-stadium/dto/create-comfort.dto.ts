import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComfortStadiumDto {
  @ApiProperty({ example: 'stadium', description: 'stadium id' })
  @IsNumber()
  @IsNotEmpty()
  stadium_id: number;

  @ApiProperty({ example: 'comfort', description: 'Comfort id' })
  @IsNumber()
  @IsNotEmpty()
  comfort_id: number;
}
