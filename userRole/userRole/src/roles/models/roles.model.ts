import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { UserRoles } from "./user-roles.model";
import { ApiProperty } from '@nestjs/swagger';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({ example: 1, description: 'Unikal ID' })
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'USTOZ', description: 'Rol nomi' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    value: string;

    @ApiProperty({ example: 'ustoz', description: 'izoh...' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @ApiProperty({ example: 'Mukhlis', description: 'Foydalanuvchi rollari' })
    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}