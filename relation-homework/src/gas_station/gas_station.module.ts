import { Module } from '@nestjs/common';
import { MainStationService } from './gas_station.service';
import { MainStationController } from './gas_station.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MainStation } from './models/gas_station.model';

@Module({
  imports: [SequelizeModule.forFeature([MainStation])],
  providers: [MainStationService],
  controllers: [MainStationController],
})
export class GasStationModule {}
