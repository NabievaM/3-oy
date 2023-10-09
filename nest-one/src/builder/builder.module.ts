import { Module } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { BuilderController } from './builder.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';

@Module({
  imports: [SequelizeModule.forFeature([Builder])],
  providers: [BuilderService],
  controllers: [BuilderController]
})
export class BuilderModule { }