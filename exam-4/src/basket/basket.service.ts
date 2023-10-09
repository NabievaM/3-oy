import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBasketDto } from './dto/create-basket.dto';
import { Basket } from './models/basket.model';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Injectable()
export class BasketService {
  constructor(@InjectModel(Basket) private basketRepo: typeof Basket) {}

  async createBasket(createBasketDto: CreateBasketDto): Promise<Basket> {
    const basket = await this.basketRepo.create(createBasketDto);
    return basket;
  }

  async findAll(): Promise<Basket[]> {
    return this.basketRepo.findAll();
  }

  async findById(id: number): Promise<Basket> {
    const basket = await this.basketRepo.findByPk(id);
    return basket;
  }

  async deleteById(id: number): Promise<number> {
    const basket = await this.basketRepo.destroy({ where: { id } });
    return basket;
  }

  async updateById(
    id: number,
    updateBasketDto: UpdateBasketDto,
  ): Promise<Basket> {
    const basket = await this.basketRepo.update(updateBasketDto, {
      where: { id },
      returning: true,
    });
    console.log(basket);

    return basket[1][0];
  }
}
