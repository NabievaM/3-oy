import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from './models/user_wallet.model';

@Module({
  imports: [SequelizeModule.forFeature([Wallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService],
})
export class WalletModule {}
