import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { StadiumCreateDto } from './dto/create-stadium.dto';
import { StadiumUpdateDto } from './dto/update-stadium.dto';

@Injectable()
export class StadiumService {
  constructor(@InjectModel(Stadium) private stadiumRepo: typeof Stadium) {}

  async createStadium(stadiumCreateDto: StadiumCreateDto): Promise<Stadium> {
    const stadium = await this.stadiumRepo.create(stadiumCreateDto);
    return stadium;
  }

  async findAll(): Promise<Stadium[]> {
    return this.stadiumRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<Stadium> {
    const stadium = await this.stadiumRepo.findByPk(id);
    return stadium;
  }

  async deleteById(id: number): Promise<number> {
    const stadium = await this.stadiumRepo.destroy({ where: { id } });
    return stadium;
  }

  async updateById(
    id: number,
    stadiumUpdateDto: StadiumUpdateDto,
  ): Promise<Stadium> {
    const stadium = await this.stadiumRepo.update(stadiumUpdateDto, {
      where: { id },
      returning: true,
    });
    console.log(stadium);

    return stadium[1][0];
  }
}
