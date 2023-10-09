import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './user_cards.service';
import { CreateCardDto } from './dto/create-user_card.dto';
import { Card } from './models/user_card.model';
import { UpdateCardDto } from './dto/update-user_card.dto';

@ApiTags('Card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({ summary: "Karta qo'shish" })
  @Post('create')
  async createCard(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardService.createCard(createCardDto);
  }

  @ApiOperation({ summary: "Kartalarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of cards',
    type: [Card],
  })
  @Get('all')
  async findAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @ApiOperation({ summary: "Kartani ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Card', type: Card })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Card> {
    return this.cardService.findById(+id);
  }

  @ApiOperation({ summary: 'Kartani ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.cardService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Kartani tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return this.cardService.updateById(+id, updateCardDto);
  }
}
