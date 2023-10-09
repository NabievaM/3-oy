import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from './models/machine.model';

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  providers: [MachineService],
  controllers: [MachineController]
})
export class MachineModule { }