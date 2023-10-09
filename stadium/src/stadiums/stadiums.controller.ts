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
import { StadiumService } from './stadiums.service';
import { StadiumCreateDto } from './dto/create-stadium.dto';
import { Stadium } from './models/stadium.model';
import { StadiumUpdateDto } from './dto/update-stadium.dto';

@ApiTags('Stadium')
@Controller('stadium')
export class StadiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @ApiOperation({ summary: "Stadion qo'shish" })
  @Post('create')
  async createStadium(
    @Body() stadiumCreateDto: StadiumCreateDto,
  ): Promise<Stadium> {
    return this.stadiumService.createStadium(stadiumCreateDto);
  }

  @ApiOperation({ summary: "Stadionlarni ko'rish" })
  @ApiResponse({ status: 200, description: 'List of stadium', type: [Stadium] })
  @Get('all')
  async findAll(): Promise<Stadium[]> {
    return this.stadiumService.findAll();
  }

  @ApiOperation({ summary: "Stadionni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Stadium', type: Stadium })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Stadium> {
    return this.stadiumService.findById(+id);
  }

  @ApiOperation({ summary: "Stadionni o'chirib tashlash" })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.stadiumService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Stadionni tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() stadiumUpdateDto: StadiumUpdateDto,
  ) {
    return this.stadiumService.updateById(+id, stadiumUpdateDto);
  }
}
