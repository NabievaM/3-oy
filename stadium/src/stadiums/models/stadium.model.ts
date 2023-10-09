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
import { Category } from '../../categories/models/category.model';
import { User } from '../../users/models/user.model';
import { Region } from '../../region/models/region.model';
import { District } from '../../district/models/district.model';
import { Comment } from '../../comments/models/comment.model';
import { Time } from '../../stadium-times/models/stadium-time.model';
import { ComfortStadium } from '../../comfort-stadium/models/comfort-stadium.model';

interface StadiumAttrs {
  name: string;
  volume: string;
  address: string;
  location: string;
  buildAt: string;
  start_time: string;
  end_time: string;
}
@Table({ tableName: 'stadiums' })
export class Stadium extends Model<Stadium, StadiumAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Paxtakor', description: 'stadium name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: '100/200',
    description: 'stadium size',
  })
  @Column({
    type: DataType.STRING,
  })
  volume: string;

  @ApiProperty({
    example: 'Toshkent shahri chilonzor tumani',
    description: 'stadium address',
  })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({
    example: 'chilonzor 70',
    description: 'Stadium location',
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: '01.02.22',
    description: 'stadium when build',
  })
  @Column({
    type: DataType.STRING,
  })
  buildAt: string;

  @ApiProperty({
    example: '16:00',
    description: 'Start time',
  })
  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @ApiProperty({
    example: '21:00',
    description: 'End time',
  })
  @Column({
    type: DataType.STRING,
  })
  end_time: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  owner_id: number;

  @BelongsTo(() => User)
  owner: User;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  region_id: number;

  @BelongsTo(() => Region)
  region: Region;

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  district_id: number;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => Comment)
  comment: Comment[];

  @HasMany(() => Time)
  time: Time[];

  @HasMany(() => ComfortStadium)
  comfort_Stadium: ComfortStadium[];
}
