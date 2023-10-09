import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface CategoriestAttrs {
  name: string;
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoriestAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Category name',
    description: 'Category qo`shish',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Stadium)
  stadium: Stadium[];
}
