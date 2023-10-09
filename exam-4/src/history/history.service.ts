import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { History } from './models/history.model';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(History) private historyRepo: typeof History) {}

  async createHistory(createHistoryDto: CreateHistoryDto): Promise<History> {
    const history = await this.historyRepo.create(createHistoryDto);
    return history;
  }

  async findAll(): Promise<History[]> {
    return this.historyRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<History> {
    const history = await this.historyRepo.findByPk(id);
    return history;
  }

  async deleteById(id: number): Promise<number> {
    const history = await this.historyRepo.destroy({ where: { id } });
    return history;
  }

  async updateById(
    id: number,
    updateHistoryDto: UpdateHistoryDto,
  ): Promise<History> {
    const history = await this.historyRepo.update(updateHistoryDto, {
      where: { id },
      returning: true,
    });
    console.log(history);

    return history[1][0];
  }
}
