import { Module } from '@nestjs/common';
import { MachineDriverService } from './machine_driver.service';
import { MachineDriverContrller } from './machine_driver.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MachineDriver } from './models/machine_driver.model';

@Module({
  imports: [SequelizeModule.forFeature([MachineDriver])],

  providers: [MachineDriverService],
  controllers: [MachineDriverContrller]
})
export class MachineDriverModule { }