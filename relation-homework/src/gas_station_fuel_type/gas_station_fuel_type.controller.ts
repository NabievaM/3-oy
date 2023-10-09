import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateGasStationFuelType } from './dto/create-gas_station_fuel_type.dto';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';
import { UpdateGasStationFuelType } from './dto/update.gas_station_fuel_type.dto';

@Controller('gasstationfueltype')
export class GasStationFuelTypeController {
    constructor(private readonly GasStationFuelTypeService: GasStationFuelTypeService) { }

    @Post('create')
    async createGasStationFuelType(@Body() createGasStationFuelTypeDto: CreateGasStationFuelType): Promise<GasStationFuelType> {
        return this.GasStationFuelTypeService.createGasStationFuelType(createGasStationFuelTypeDto);
    }

    @Get("all")
    async findAllGasStationFuelType(): Promise<GasStationFuelType[]> {
        return this.GasStationFuelTypeService.findAllGasStationFuelType()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<GasStationFuelType> {
        return this.GasStationFuelTypeService.findById(+id);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.GasStationFuelTypeService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateGasStationFuelTypeDto: UpdateGasStationFuelType) {
        return this.GasStationFuelTypeService.updateById(+id, updateGasStationFuelTypeDto);
    }
}