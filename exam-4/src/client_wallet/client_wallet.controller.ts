import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientWalletService } from './client_wallet.service';
import { AddMoneyDto } from './dto/create-client_wallet.dto';
import { Wallet } from './models/client_wallet.model';
import { ClientGuard } from '../guards/client.guard';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Client Wallet')
@Controller('Wallet')
export class WalletController {
  constructor(private readonly walletService: ClientWalletService) {}
  @ApiOperation({ summary: 'Add wallet' })
  @UseGuards(ClientGuard)
  @Post('create')
  async addMoney(@Body() addMoneyDto: AddMoneyDto): Promise<Wallet> {
    return this.walletService.addWallet(addMoneyDto);
  }

  @ApiOperation({ summary: 'View all wallets' })
  @ApiResponse({ status: 200, description: 'List of wallets', type: [Wallet] })
  @UseGuards(AdminGuard)
  @Get('all')
  async findAll(): Promise<Wallet[]> {
    return this.walletService.findAll();
  }

  @ApiOperation({ summary: 'View wallet by id' })
  @ApiResponse({ status: 200, description: 'Wallet', type: Wallet })
  @UseGuards(ClientGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Wallet> {
    return this.walletService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete wallet' })
  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.walletService.deleteById(+id);
  }
}
