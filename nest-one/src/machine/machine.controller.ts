import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './models/machine.model';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService) { }

    @Post('create')
    async createMachine(@Body() createMachineDto: CreateMachineDto): Promise<Machine> {
        return this.machineService.createMachine(createMachineDto);
    }

    @Get("all")
    async findAllMachine(): Promise<Machine[]> {
        return this.machineService.findAllMachine()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<Machine> {
        return this.machineService.findById(+id);
    }

    @Get("name/:name")
    async findByName(@Param("name") name: string): Promise<Machine> {
        return this.machineService.findByName(name);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.machineService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateMachineDto: UpdateMachineDto) {
        return this.machineService.updateById(+id, updateMachineDto);
    }
}