import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface CommentAttrs {
  impression: string;
}

@Table({ tableName: 'Comment' })
export class Comment extends Model<Comment, CommentAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'comment', description: 'Write a comment' })
  @Column({
    type: DataType.STRING,
  })
  impression: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  stadium_id: number;

  @BelongsTo(() => Stadium)
  stadium: Stadium;
}
