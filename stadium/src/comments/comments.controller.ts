import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './models/comment.model';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: 'Komment yozish' })
  @Post('create')
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    return this.commentService.createComment(createCommentDto);
  }

  @ApiOperation({ summary: "Commentlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of comments',
    type: [Comment],
  })
  @Get('all')
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @ApiOperation({ summary: "Kommentni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Comments', type: Comment })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Comment> {
    return this.commentService.findById(+id);
  }

  @ApiOperation({ summary: "Kommentni o'chirib tashlash" })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.commentService.deleteById(+id);
  }
}
