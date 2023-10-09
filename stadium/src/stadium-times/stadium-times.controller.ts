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
import { TimeService } from './stadium-times.service';
import { CreateTimeDto } from './dto/create-stadium-time.dto';
import { Time } from './models/stadium-time.model';
import { UpdateTimeDto } from './dto/update-stadium-time.dto';

@ApiTags('Stadium-time')
@Controller('stadium_time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @ApiOperation({ summary: "Stadion vaqtini qo'shish" })
  @Post('create')
  async createTime(@Body() createTimeDto: CreateTimeDto): Promise<Time> {
    return this.timeService.createTime(createTimeDto);
  }

  @ApiOperation({ summary: "Vaqtlarini ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of stadium times',
    type: [Time],
  })
  @Get('all')
  async findAll(): Promise<Time[]> {
    return this.timeService.findAll();
  }

  @ApiOperation({ summary: "Stadion vaqtlarini ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Stadium-times', type: Time })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Time> {
    return this.timeService.findById(+id);
  }

  @ApiOperation({ summary: 'Stadion vaqtini ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.timeService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Stadion vaqtini tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTimeDto: UpdateTimeDto,
  ) {
    return this.timeService.updateById(+id, updateTimeDto);
  }
}
