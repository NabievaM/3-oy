import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { History } from './models/history.model';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ClientGuard } from '../guards/client.guard';

@ApiTags('History')
@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}
  @ApiOperation({ summary: 'Add History' })
  @UseGuards(AdminGuard)
  @Post('create')
  async createHistory(
    @Body() createHistoryDto: CreateHistoryDto,
  ): Promise<History> {
    return this.historyService.createHistory(createHistoryDto);
  }

  @ApiOperation({ summary: 'View all history' })
  @ApiResponse({ status: 200, description: 'List of history', type: [History] })
  @UseGuards(AdminGuard)
  @Get('all')
  async findAll(): Promise<History[]> {
    return this.historyService.findAll();
  }

  @ApiOperation({ summary: 'View History by id' })
  @ApiResponse({ status: 200, description: 'History', type: History })
  @UseGuards(ClientGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<History> {
    return this.historyService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete History' })
  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.historyService.deleteById(+id);
  }

  @ApiOperation({ summary: 'History edit' })
  @UseGuards(AdminGuard)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateHistoryDto: UpdateHistoryDto,
  ) {
    return this.historyService.updateById(+id, updateHistoryDto);
  }
}
