import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { Wallet } from './models/user_wallet.model';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { UserGuard } from 'src/guards/user.guard';

@ApiTags('Wallet')
@Controller('wallet')
export class UserWalletController {
  constructor(private readonly walletService: UserWalletService) {}

  @ApiOperation({ summary: "Hamyon qo'shish" })
  @Post('create')
  async createWallet(
    @Body() createWalletDto: CreateUserWalletDto,
  ): Promise<Wallet> {
    return this.walletService.createWallet(createWalletDto);
  }

  @ApiOperation({ summary: "Hamyonlarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of wallets',
    type: [Wallet],
  })
  @Get('all')
  async findAll(): Promise<Wallet[]> {
    return this.walletService.findAll();
  }

  @ApiOperation({ summary: "Hamyonni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Wallet', type: Wallet })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Wallet> {
    return this.walletService.findById(+id);
  }

  @ApiOperation({ summary: 'Hamyonni ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.walletService.deleteById(+id);
  }
}
