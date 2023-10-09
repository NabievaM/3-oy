import { IsNotEmpty, IsUppercase, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateRoleDto {
    @ApiProperty({ example: 'ADMIN', description: 'Rol yaratish' })
    @IsNotEmpty()
    @IsUppercase()
    @IsString()
    value: string;

    @ApiProperty({ example: 'admin', description: 'Izoh' })
    @IsNotEmpty()
    @IsString()
    description: string;
}
