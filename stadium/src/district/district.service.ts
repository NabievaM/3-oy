import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District) {}

  async createDistrict(
    createDistrictDto: CreateDistrictDto,
  ): Promise<District> {
    const district = await this.districtRepo.create(createDistrictDto);
    return district;
  }

  async findAll(): Promise<District[]> {
    return this.districtRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<District> {
    const district = await this.districtRepo.findByPk(id);
    return district;
  }

  async deleteById(id: number): Promise<number> {
    const district = await this.districtRepo.destroy({ where: { id } });
    return district;
  }

  async updateById(
    id: number,
    updateDistrictDto: UpdateDistrictDto,
  ): Promise<District> {
    const district = await this.districtRepo.update(updateDistrictDto, {
      where: { id },
      returning: true,
    });
    console.log(district);

    return district[1][0];
  }
}
