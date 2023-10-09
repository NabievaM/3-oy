import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class StadiumUpdateDto {
  @ApiProperty({ example: 'Paxtakor', description: 'Stadium name' })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({ example: '100/200', description: 'Stadion size' })
  @IsNotEmpty()
  @IsString()
  volume?: string;

  @ApiProperty({
    example: 'Toshkent shahri chilonzor tumani',
    description: 'Stadion address',
  })
  @IsNotEmpty()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'Chilonzor 70', description: 'Stadion location' })
  @IsNotEmpty()
  @IsString()
  location?: string;

  @ApiProperty({ example: '02.04.22', description: 'Stadion when build' })
  @IsNotEmpty()
  @IsString()
  buildAt?: string;

  @ApiProperty({ example: '16:00', description: 'Start time' })
  @IsNotEmpty()
  @IsString()
  start_time?: string;

  @ApiProperty({ example: '21:00', description: 'End time' })
  @IsNotEmpty()
  @IsString()
  end_time?: string;
}
