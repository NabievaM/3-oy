import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.model';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) { }

    @Post('create')
    async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<Driver> {
        return this.driverService.createDriver(createDriverDto);
    }

    @Get("all")
    async findAllDriver(): Promise<Driver[]> {
        return this.driverService.findAllDriver()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<Driver> {
        return this.driverService.findById(+id);
    }

    @Get("firstName/:firstName")
    async findByName(@Param("firstName") firstName: string): Promise<Driver> {
        return this.driverService.findByName(firstName);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.driverService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateDriverDto: UpdateDriverDto) {
        return this.driverService.updateById(+id, updateDriverDto);
    }
}