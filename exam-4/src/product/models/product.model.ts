import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Category } from '../../category/models/category.model';
import { Basket } from '../../basket/models/basket.model';
import { Order } from '../../order/models/order.model';

interface ProductAttrs {
  name: string;
  price: string;
  image: string;
  qwantity: string;
  decsription: string;
}

@Table({ tableName: 'Product' })
export class Product extends Model<Product, ProductAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Computer', description: 'Product name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'This computer`s memory 128gb',
    description: 'Product`s description',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: '2.000.000',
    description: 'Product`s price',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @ApiProperty({
    example: '30',
    description: 'Amount product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  qwantity: string;

  @ApiProperty({ example: 'image', description: 'Product`s image' })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Basket)
  basket: Basket[];

  @HasMany(() => Order)
  order: Order[];
}
