import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Time } from './models/stadium-time.model';
import { CreateTimeDto } from './dto/create-stadium-time.dto';
import { UpdateTimeDto } from './dto/update-stadium-time.dto';

@Injectable()
export class TimeService {
  constructor(@InjectModel(Time) private timeRepo: typeof Time) {}

  async createTime(createTimeDto: CreateTimeDto): Promise<Time> {
    const time = await this.timeRepo.create(createTimeDto);
    return time;
  }

  async findAll(): Promise<Time[]> {
    return this.timeRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<Time> {
    const time = await this.timeRepo.findByPk(id);
    return time;
  }

  async deleteById(id: number): Promise<number> {
    const time = await this.timeRepo.destroy({ where: { id } });
    return time;
  }

  async updateById(id: number, updateTimeDto: UpdateTimeDto): Promise<Time> {
    const time = await this.timeRepo.update(updateTimeDto, {
      where: { id },
      returning: true,
    });
    console.log(time);

    return time[1][0];
  }
}
