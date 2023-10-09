import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { MainStationService } from './gas_station.service';
import { CreateGasStation } from './dto/create-gas_station.dto';
import { MainStation } from './models/gas_station.model';
import { UpdateGasStation } from './dto/update-gas_station.dto';

@Controller('mainstation')
export class MainStationController {
    constructor(private readonly mainstationService: MainStationService) { }

    @Post('create')
    async createMainstation(@Body() createMainstationDto: CreateGasStation): Promise<MainStation> {
        return this.mainstationService.createMainstation(createMainstationDto);
    }

    @Get("all")
    async findAllMainstation(): Promise<MainStation[]> {
        return this.mainstationService.findAllMainStation()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<MainStation> {
        return this.mainstationService.findById(+id);
    }

    @Get("main_gas_station_name/:main_gas_station_name")
    async findByName(@Param("main_gas_station_name") main_gas_station_name: string): Promise<MainStation> {
        return this.mainstationService.findByName(main_gas_station_name);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.mainstationService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateMainstationDto: UpdateGasStation) {
        return this.mainstationService.updateById(+id, updateMainstationDto);
    }
}