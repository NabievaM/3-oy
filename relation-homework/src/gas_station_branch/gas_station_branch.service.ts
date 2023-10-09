import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { StationBranch } from './models/gas_station_branch.model';
import { CreateStationBranch } from './dto/create-gas_station_branch.dto';
import { UpdateStationBranch } from './dto/update-gas_station_branch.dto';

@Injectable()
export class StationBranchService {
  constructor(
    @InjectModel(StationBranch) private stationbranchRepo: typeof StationBranch,
  ) {}

  async createStationBranch(
    createStationBranchDto: CreateStationBranch,
  ): Promise<StationBranch> {
    const stationbranch = await this.stationbranchRepo.create(
      createStationBranchDto,
    );
    return stationbranch;
  }

  async findAllStationBranch(): Promise<StationBranch[]> {
    return this.stationbranchRepo.findAll({
      include: {
        all: true,
      },
    });
  }

  async findById(id: number): Promise<StationBranch> {
    const stationbranch = await this.stationbranchRepo.findByPk(id);
    return stationbranch;
  }

  async findByName(branch_name: string): Promise<StationBranch> {
    const stationbranch = await this.stationbranchRepo.findOne({
      where: { branch_name },
    });
    return stationbranch;
  }

  async deleteById(id: number): Promise<number> {
    const stationbranch = await this.stationbranchRepo.destroy({
      where: { id },
    });
    return stationbranch;
  }

  async updateById(
    id: number,
    updateStationBranchDto: UpdateStationBranch,
  ): Promise<StationBranch> {
    const stationbranch = await this.stationbranchRepo.update(
      updateStationBranchDto,
      {
        where: { id },
        returning: true,
      },
    );
    console.log(stationbranch);

    return stationbranch[1][0];
  }
}
