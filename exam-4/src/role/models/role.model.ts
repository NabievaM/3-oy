import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Admin } from '../../admin/models/admin.model';

interface RoleAttrs {
  name: string;
}

@Table({ tableName: 'role' })
export class Role extends Model<Role, RoleAttrs> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Vendor', description: 'roles' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Admin)
  admin: Admin[];
}
