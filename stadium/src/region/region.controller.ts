import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Region qo'shish" })
  @Post('create')
  async createRegion(
    @Body() createRegionDto: CreateRegionDto,
  ): Promise<Region> {
    return this.regionService.createRegion(createRegionDto);
  }

  @ApiOperation({ summary: "Hududlarni ko'rish" })
  @ApiResponse({ status: 200, description: 'List of region', type: [Region] })
  @Get('all')
  async findAll(): Promise<Region[]> {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Hududni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Region', type: Region })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Region> {
    return this.regionService.findById(+id);
  }

  @ApiOperation({ summary: 'Hududni ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.regionService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Hududni tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    return this.regionService.updateById(+id, updateRegionDto);
  }
}
