import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from "class-validator";
export class LoginDto {
    @ApiProperty({ example: 'user1@gmail.com', description: 'Ega gmail' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'Uzbek!$T0n', description: 'Gmail paroli' })
    @IsStrongPassword()
    readonly password: string;
}