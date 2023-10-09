import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Vendor', description: 'roles' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
