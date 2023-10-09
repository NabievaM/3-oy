import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Machine } from './models/machine.model';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine) private machineRepo: typeof Machine) { }

    async createMachine(createMachineDto: CreateMachineDto): Promise<Machine> {
        const machine = await this.machineRepo.create(createMachineDto)
        return machine;
    }

    async findAllMachine(): Promise<Machine[]> {
        return this.machineRepo.findAll({
            include: {
                all: true
            }
        })
    }

    async findById(id: number): Promise<Machine> {
        const machine = await this.machineRepo.findByPk(id);
        return machine;
    }

    async findByName(name: string): Promise<Machine> {
        const machine = await this.machineRepo.findOne({ where: { name } });
        return machine;
    }

    async deleteById(id: number): Promise<number> {
        const machine = await this.machineRepo.destroy({ where: { id } });
        return machine;
    }

    async updateById(id: number, updateMachineDto: UpdateMachineDto): Promise<Machine> {
        const machine = await this.machineRepo.update(updateMachineDto, {
            where: { id },
            returning: true
        });
        console.log(machine);

        return machine[1][0]
    }
};
