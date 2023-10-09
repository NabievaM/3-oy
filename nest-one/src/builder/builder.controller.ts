import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Controller('builder')
export class BuilderController {
    constructor(private readonly builderService: BuilderService) { }

    @Post('create')
    async createBuilder(@Body() createBuilderDto: CreateBuilderDto): Promise<Builder> {
        return this.builderService.createBuilder(createBuilderDto);
    }

    @Get("all")
    async findAllBuilder(): Promise<Builder[]> {
        return this.builderService.findAllBuilder()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<Builder> {
        return this.builderService.findById(+id);
    }

    @Get("fullName/:fullName")
    async findByName(@Param("fullName") fullName: string): Promise<Builder> {
        return this.builderService.findByName(fullName);
    }

    @Delete(":id")
    async deleteById(@Param("id") id: string): Promise<number> {
        return this.builderService.deleteById(+id);
    }

    @Put(":id")
    async updateById(@Param("id") id: string, @Body() updateBuilderDto: UpdateBuilderDto) {
        return this.builderService.updateById(+id, updateBuilderDto);
    }
}