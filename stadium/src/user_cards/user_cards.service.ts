import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './models/user_card.model';
import { CreateCardDto } from './dto/create-user_card.dto';
import { UpdateCardDto } from './dto/update-user_card.dto';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardRepo: typeof Card) {}

  async createCard(createCardDto: CreateCardDto): Promise<Card> {
    const card = await this.cardRepo.create(createCardDto);
    return card;
  }

  async findAll(): Promise<Card[]> {
    return this.cardRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<Card> {
    const card = await this.cardRepo.findByPk(id);
    return card;
  }

  async deleteById(id: number): Promise<number> {
    const card = await this.cardRepo.destroy({ where: { id } });
    return card;
  }

  async updateById(id: number, updateCardDto: UpdateCardDto): Promise<Card> {
    const card = await this.cardRepo.update(updateCardDto, {
      where: { id },
      returning: true,
    });
    console.log(card);

    return card[1][0];
  }
}
