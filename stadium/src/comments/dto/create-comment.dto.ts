import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'comment', description: 'Write a comment' })
  @IsNotEmpty()
  @IsString()
  impression: string;
}
