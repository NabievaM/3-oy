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
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './models/order.model';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ClientGuard } from '../guards/client.guard';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @ApiOperation({ summary: 'Add Order' })
  @UseGuards(AdminGuard)
  @Post('create')
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(createOrderDto);
  }

  @ApiOperation({ summary: 'View all orders' })
  @ApiResponse({ status: 200, description: 'List of orders', type: [Order] })
  @UseGuards(AdminGuard)
  @Get('all')
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @ApiOperation({ summary: 'View order by id' })
  @ApiResponse({ status: 200, description: 'Order', type: Order })
  @UseGuards(ClientGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Order> {
    return this.orderService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete Order' })
  @UseGuards(ClientGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.orderService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Order edit' })
  @UseGuards(ClientGuard)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.updateById(+id, updateOrderDto);
  }
}
