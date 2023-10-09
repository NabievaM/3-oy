import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { FuelTypeService } from './fuel_types.service';
import { CreateFueltypesDto } from './dto/create-fuel_types.dto';
import { FuelType } from './models/fuel_types.model';
import { UpdateFueltypesDto } from './dto/update-fuel_types.dto';

@Controller('fueltype')
export class FuelTypeController {
    constructor(private readonly fueltypeService: FuelTypeService) { }

    @Post('create')
    async createFuelType(@Body() createFuelTypeDto: CreateFueltypesDto): Promise<FuelType> {
        return this.fueltypeService.createFuelType(createFuelTypeDto);
    }

    @Get("all")
    async findAllFuelType(): Promise<FuelType[]> {
        return this.fueltypeService.findAllFuelType()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<FuelType> {
        return this.fueltypeService.findById(+id);
    }

    @Get("name/:name")
    async findByName(@Param("name") name: string): Promise<FuelType> {
        return this.fueltypeService.findByName(name);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.fueltypeService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateFuelTypeDto: UpdateFueltypesDto) {
        return this.fueltypeService.updateById(+id, updateFuelTypeDto);
    }
}