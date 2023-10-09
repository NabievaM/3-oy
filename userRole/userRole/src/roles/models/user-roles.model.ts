import { ForeignKey, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Role } from "./roles.model";
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({ example: 1, description: 'Unikal ID' })
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: '1', description: 'Ega ID si' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ApiProperty({ example: '1', description: 'Rol ID si' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number;
}