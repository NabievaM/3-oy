import { Injectable } from '@nestjs/common';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine_driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine_driver.model';


@Injectable()
export class MachineDriverService {
    constructor(
        @InjectModel(MachineDriver) private machine_driver: typeof MachineDriver,
    ) { }
    create(createMachineDriverDto: CreateMachineDriverDto) {
        return this.machine_driver.create(createMachineDriverDto);
    }
};
