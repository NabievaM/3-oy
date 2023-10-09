import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel_types.service';
import { FuelTypeController } from './fuel_types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/fuel_types.model';

@Module({
  imports: [SequelizeModule.forFeature([FuelType])],
  providers: [FuelTypeService],
  controllers: [FuelTypeController]
})
export class FuelTypesModule { }