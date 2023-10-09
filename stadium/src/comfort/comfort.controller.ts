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
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { Comfort } from './models/comfort.model';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comfort zone')
@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @ApiOperation({ summary: "Comfort zona qo'shish" })
  @Post('create')
  async createComfort(
    @Body() createComfortDto: CreateComfortDto,
  ): Promise<Comfort> {
    return this.comfortService.createComfort(createComfortDto);
  }

  @ApiOperation({ summary: "Comfort zonalarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of comfort zone',
    type: [Comfort],
  })
  @Get('all')
  async findAll(): Promise<Comfort[]> {
    return this.comfortService.findAll();
  }

  @ApiOperation({ summary: "Comfort zone ni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Comfort zone', type: Comfort })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Comfort> {
    return this.comfortService.findById(+id);
  }

  @ApiOperation({ summary: 'Comfort zone ni ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.comfortService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Comfort zone ni tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateComfortDto: UpdateComfortDto,
  ) {
    return this.comfortService.updateById(+id, updateComfortDto);
  }
}
