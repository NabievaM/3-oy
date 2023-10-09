import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepo.create(createOrderDto);
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Order> {
    const order = await this.orderRepo.findByPk(id);
    return order;
  }

  async deleteById(id: number): Promise<number> {
    const order = await this.orderRepo.destroy({ where: { id } });
    return order;
  }

  async updateById(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.orderRepo.update(updateOrderDto, {
      where: { id },
      returning: true,
    });
    console.log(order);

    return order[1][0];
  }
}
