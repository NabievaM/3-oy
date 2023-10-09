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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { District } from './models/district.model';
import { UpdateDistrictDto } from './dto/update-district.dto';

@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "District qo'shish" })
  @Post('create')
  async createDistrict(
    @Body() createDistrictDto: CreateDistrictDto,
  ): Promise<District> {
    return this.districtService.createDistrict(createDistrictDto);
  }

  @ApiOperation({ summary: "Districtlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of districts',
    type: [District],
  })
  @Get('all')
  async findAll(): Promise<District[]> {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "District ni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'District', type: District })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<District> {
    return this.districtService.findById(+id);
  }

  @ApiOperation({ summary: 'District ni ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.districtService.deleteById(+id);
  }

  @ApiOperation({ summary: 'District ni tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtService.updateById(+id, updateDistrictDto);
  }
}
