import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTimeDto {
  @ApiProperty({ example: '16:00', description: 'start time' })
  @IsNotEmpty()
  @IsString()
  start_time: string;

  @ApiProperty({
    example: '22:00',
    description: 'end time',
  })
  @IsNotEmpty()
  @IsString()
  end_time: string;

  @ApiProperty({
    example: '100.000',
    description: 'Stadionni 1 soatli narxi',
  })
  @IsNotEmpty()
  @IsString()
  price: string;
}
