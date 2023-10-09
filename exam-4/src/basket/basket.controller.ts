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
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './models/basket.model';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { ClientGuard } from '../guards/client.guard';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Basket')
@Controller('Basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}
  @ApiOperation({ summary: 'Add Basket' })
  @UseGuards(ClientGuard)
  @Post('create')
  async createBasket(
    @Body() createBasketDto: CreateBasketDto,
  ): Promise<Basket> {
    return this.basketService.createBasket(createBasketDto);
  }

  @ApiOperation({ summary: 'View all baskets' })
  @ApiResponse({ status: 200, description: 'List of baskets', type: [Basket] })
  @UseGuards(AdminGuard)
  @Get('all')
  async findAll(): Promise<Basket[]> {
    return this.basketService.findAll();
  }

  @ApiOperation({ summary: 'View basket by id' })
  @ApiResponse({ status: 200, description: 'Basket', type: Basket })
  @UseGuards(ClientGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Basket> {
    return this.basketService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete Basket' })
  @UseGuards(ClientGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.basketService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Basket edit' })
  @UseGuards(ClientGuard)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateBasketDto: UpdateBasketDto,
  ) {
    return this.basketService.updateById(+id, updateBasketDto);
  }
}
