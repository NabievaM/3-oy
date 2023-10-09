import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort) {}

  async createComfort(createComfortDto: CreateComfortDto): Promise<Comfort> {
    const comfort = await this.comfortRepo.create(createComfortDto);
    return comfort;
  }

  async findAll(): Promise<Comfort[]> {
    return this.comfortRepo.findAll();
  }

  async findById(id: number): Promise<Comfort> {
    const comfort = await this.comfortRepo.findByPk(id);
    return comfort;
  }

  async deleteById(id: number): Promise<number> {
    const comfort = await this.comfortRepo.destroy({ where: { id } });
    return comfort;
  }

  async updateById(
    id: number,
    updateComfortDto: UpdateComfortDto,
  ): Promise<Comfort> {
    const comfort = await this.comfortRepo.update(updateComfortDto, {
      where: { id },
      returning: true,
    });
    console.log(comfort);

    return comfort[1][0];
  }
}
