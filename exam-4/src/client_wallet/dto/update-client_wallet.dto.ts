import { PartialType } from '@nestjs/swagger';
import { AddMoneyDto } from './create-client_wallet.dto';

export class UpdateClientWalletDto extends PartialType(AddMoneyDto) {}
