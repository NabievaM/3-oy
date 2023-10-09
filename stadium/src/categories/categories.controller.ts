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
import { CategoryService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-category.dto';
import { Category } from './models/category.model';
import { UpdateCategoriesDto } from './dto/update-category.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: "Category qo'shish" })
  @Post('create')
  async createCategory(
    @Body() createCategoryDto: CreateCategoriesDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiOperation({ summary: "Categoriyalarni ko'rish" })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    type: [Category],
  })
  @Get('all')
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @ApiOperation({ summary: "Category ni ID si orqali ko'rish" })
  @ApiResponse({ status: 200, description: 'Category', type: Category })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findById(+id);
  }

  @ApiOperation({ summary: 'Category ni ochirib tashlash' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.categoryService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Category ni tahrirlash' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoriesDto,
  ) {
    return this.categoryService.updateById(+id, updateCategoryDto);
  }
}
