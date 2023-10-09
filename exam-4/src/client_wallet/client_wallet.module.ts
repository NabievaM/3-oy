import { Module } from '@nestjs/common';
import { ClientWalletService } from './client_wallet.service';
import { WalletController } from './client_wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from './models/client_wallet.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Wallet]), JwtModule],
  controllers: [WalletController],
  providers: [ClientWalletService],
})
export class ClientWalletModule {}
