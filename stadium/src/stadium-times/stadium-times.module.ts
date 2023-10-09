import { Module } from '@nestjs/common';
import { TimeService } from './stadium-times.service';
import { TimeController } from './stadium-times.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Time } from './models/stadium-time.model';

@Module({
  imports: [SequelizeModule.forFeature([Time])],
  controllers: [TimeController],
  providers: [TimeService],
})
export class StadiumTimesModule {}
