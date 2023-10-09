import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Machine } from '../../machine/models/machine.model';
import { Driver } from '../../driver/models/driver.model';

interface MachineDriverCreationAttr {
    machineId: number;
    driverId: number;
}

@Table({
    tableName: 'machine_driver',
    createdAt: false,
    updatedAt: false
})
export class MachineDriver extends Model<MachineDriver, MachineDriverCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Machine)
    @Column({ type: DataType.INTEGER })
    machineId: number

    @ForeignKey(() => Driver)
    @Column({ type: DataType.INTEGER })
    driverId: number
}
