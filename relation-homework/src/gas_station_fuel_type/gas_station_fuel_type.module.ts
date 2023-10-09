import { Module } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { GasStationFuelTypeController } from './gas_station_fuel_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationFuelType])],
  providers: [GasStationFuelTypeService],
  controllers: [GasStationFuelTypeController]
})
export class GasStationFuelTypeModule { }