import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserWalletDto {
  @ApiProperty({ example: '1000$', description: 'user_wallet' })
  @IsString()
  @IsNotEmpty()
  wallet?: string;
}
