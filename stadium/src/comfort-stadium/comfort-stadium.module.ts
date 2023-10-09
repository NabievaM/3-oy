import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComfortStadium } from './models/comfort-stadium.model';
import { ComfortStadiumController } from './comfort-stadium.controller';
import { ComfortStadiumService } from './comfort-stadium.service';

@Module({
  imports: [SequelizeModule.forFeature([ComfortStadium])],
  controllers: [ComfortStadiumController],
  providers: [ComfortStadiumService],
})
export class ComfortStadiumModule {}
