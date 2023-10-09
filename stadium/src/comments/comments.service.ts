import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentRepo: typeof Comment) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = await this.commentRepo.create(createCommentDto);
    return comment;
  }

  async findAll(): Promise<Comment[]> {
    return this.commentRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<Comment> {
    const comment = await this.commentRepo.findByPk(id);
    return comment;
  }

  async deleteById(id: number): Promise<number> {
    const comment = await this.commentRepo.destroy({ where: { id } });
    return comment;
  }
}
