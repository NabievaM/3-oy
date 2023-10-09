import { Injectable } from '@nestjs/common';
import { AddMoneyDto } from './dto/create-client_wallet.dto';
import { UpdateClientWalletDto } from './dto/update-client_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wallet } from './models/client_wallet.model';

@Injectable()
export class ClientWalletService {
  constructor(@InjectModel(Wallet) private walletRepo: typeof Wallet) {}

  async addWallet(addMoneyDto: AddMoneyDto): Promise<Wallet> {
    const wallet = await this.walletRepo.create(addMoneyDto);
    return wallet;
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletRepo.findAll({
      include: { all: true },
    });
  }

  async findById(id: number): Promise<Wallet> {
    const wallet = await this.walletRepo.findByPk(id);
    return wallet;
  }

  async deleteById(id: number): Promise<number> {
    const wallet = await this.walletRepo.destroy({ where: { id } });
    return wallet;
  }
}
