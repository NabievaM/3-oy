import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { FuelTypesModule } from './fuel_types/fuel_types.module';
import { FuelType } from './fuel_types/models/fuel_types.model';
import { MainStation } from './gas_station/models/gas_station.model';
import { StationBranch } from './gas_station_branch/models/gas_station_branch.model';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { GasStationFuelType } from './gas_station_fuel_type/models/gas_station_fuel_type.model';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [FuelType, MainStation, StationBranch, GasStationFuelType],
      autoLoadModels: true,
      logging: true,
    }),
    GasStationModule,
    GasStationBranchModule,
    FuelTypesModule,
    GasStationFuelTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { };