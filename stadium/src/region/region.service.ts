import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}

  async createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
    const region = await this.regionRepo.create(createRegionDto);
    return region;
  }

  async findAll(): Promise<Region[]> {
    return this.regionRepo.findAll();
  }

  async findById(id: number): Promise<Region> {
    const region = await this.regionRepo.findByPk(id);
    return region;
  }

  async deleteById(id: number): Promise<number> {
    const region = await this.regionRepo.destroy({ where: { id } });
    return region;
  }

  async updateById(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<Region> {
    const region = await this.regionRepo.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    console.log(region);

    return region[1][0];
  }
}
