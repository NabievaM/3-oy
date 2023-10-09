import { Module } from '@nestjs/common';
import { StationBranchService } from './gas_station_branch.service';
import { GasStationBranch } from './gas_station_branch.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StationBranch } from './models/gas_station_branch.model';

@Module({
  imports: [SequelizeModule.forFeature([StationBranch])],
  providers: [StationBranchService],
  controllers: [GasStationBranch]
})
export class GasStationBranchModule { }
