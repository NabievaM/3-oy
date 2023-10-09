import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { StationBranchService } from './gas_station_branch.service';
import { CreateStationBranch } from './dto/create-gas_station_branch.dto';
import { StationBranch } from './models/gas_station_branch.model';
import { UpdateStationBranch } from './dto/update-gas_station_branch.dto';

@Controller('station_branch')
export class GasStationBranch {
    constructor(private readonly stationbranchService: StationBranchService) { }

    @Post('create')
    async createStationBranch(@Body() createStationBranchDto: CreateStationBranch): Promise<StationBranch> {
        return this.stationbranchService.createStationBranch(createStationBranchDto);
    }

    @Get("all")
    async findAllStationBranch(): Promise<StationBranch[]> {
        return this.stationbranchService.findAllStationBranch()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<StationBranch> {
        return this.stationbranchService.findById(+id);
    }

    @Get("branch_name/:branch_name")
    async findByName(@Param("branch_name") branch_name: string): Promise<StationBranch> {
        return this.stationbranchService.findByName(branch_name);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.stationbranchService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateStationBranchDto: UpdateStationBranch) {
        return this.stationbranchService.updateById(+id, updateStationBranchDto);
    }
}