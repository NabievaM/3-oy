import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

interface UserWalletAttrs {
  wallet: string;
}

@Table({ tableName: 'Wallet' })
export class Wallet extends Model<Wallet, UserWalletAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1000$', description: 'Wallet' })
  @Column({
    type: DataType.STRING,
  })
  wallet: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
