import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { ComfortStadiumService } from './comfort-stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort.dto';
import { ComfortStadium } from './models/comfort-stadium.model';

@ApiTags('ComfortStadium')
@Controller('comfort_stadium')
export class ComfortStadiumController {
  constructor(private readonly ComfortStadiumService: ComfortStadiumService) {}

  @ApiOperation({ summary: "Stadion qulayligini qo'shish" })
  @Post('create')
  async createComfortStadium(
    @Body() createComfortStadiumDto: CreateComfortStadiumDto,
  ): Promise<ComfortStadium> {
    return this.ComfortStadiumService.createComfortStadium(
      createComfortStadiumDto,
    );
  }

  @ApiOperation({ summary: "Stadion qulayliklarini ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of Comfort Stadium',
    type: [ComfortStadium],
  })
  @Get('all')
  async findAll(): Promise<ComfortStadium[]> {
    return this.ComfortStadiumService.findAll();
  }

  @ApiOperation({ summary: "Stadion qulayligini ID si orqali ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'Comfort Stadium',
    type: ComfortStadium,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<ComfortStadium> {
    return this.ComfortStadiumService.findById(+id);
  }

  @ApiOperation({ summary: 'Stadion qulayligini ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.ComfortStadiumService.deleteById(+id);
  }
}
