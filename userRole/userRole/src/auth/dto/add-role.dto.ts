import { ApiProperty } from '@nestjs/swagger';
export class AddRoleDto {
    @ApiProperty({ example: '1', description: 'Foydalanuvchilarga rol qo`shish' })
    readonly userId: number;
    @ApiProperty({ example: '1', description: 'Rol nomi' })
    readonly value: string;
}