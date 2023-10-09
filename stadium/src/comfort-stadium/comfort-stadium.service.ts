import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComfortStadium } from './models/comfort-stadium.model';
import { CreateComfortStadiumDto } from './dto/create-comfort.dto';

@Injectable()
export class ComfortStadiumService {
  constructor(
    @InjectModel(ComfortStadium)
    private comfortStadiumRepo: typeof ComfortStadium,
  ) {}

  async createComfortStadium(
    createComfortStadiumDto: CreateComfortStadiumDto,
  ): Promise<ComfortStadium> {
    const comfortStadium = await this.comfortStadiumRepo.create(
      createComfortStadiumDto,
    );
    return comfortStadium;
  }

  async findAll(): Promise<ComfortStadium[]> {
    return this.comfortStadiumRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<ComfortStadium> {
    const comfortStadium = await this.comfortStadiumRepo.findByPk(id);
    return comfortStadium;
  }

  async deleteById(id: number): Promise<number> {
    const comfortStadium = await this.comfortStadiumRepo.destroy({
      where: { id },
    });
    return comfortStadium;
  }
}
