import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';
import { Comfort } from '../../comfort/models/comfort.model';

@Table({ tableName: 'ComfortStadium' })
export class ComfortStadium extends Model<ComfortStadium> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  stadium_id: number;

  @BelongsTo(() => Stadium)
  stadium: Stadium;

  @ForeignKey(() => Comfort)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  comfort_id: number;

  @BelongsTo(() => Comfort)
  comfort: Comfort;
}
