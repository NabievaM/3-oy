import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Wallet } from './models/user_wallet.model';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(Wallet) private walletRepo: typeof Wallet) {}

  async createWallet(createWalletDto: CreateUserWalletDto): Promise<Wallet> {
    const wallet = await this.walletRepo.create(createWalletDto);
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
