import { Module } from '@nestjs/common';
import { CardService } from './user_cards.service';
import { CardController } from './user_cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Card } from './models/user_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Card])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
