import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { CreateMachineDriverDto } from './dto/create-machine_driver.dto';
import { UpdateMachineDriverDto } from './dto/update-machine_driver.dto';

@Controller('machine_driver')
export class MachineDriverContrller {
    constructor(private readonly machineDriveService: MachineDriverService) { }

    @Post()
    create(@Body() createMachineDriverDto: CreateMachineDriverDto) {
        return this.machineDriveService.create(createMachineDriverDto);
    }
};