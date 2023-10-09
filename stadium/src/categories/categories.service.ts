import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { CreateCategoriesDto } from './dto/create-category.dto';
import { UpdateCategoriesDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepo: typeof Category) {}

  async createCategory(
    createCategoryDto: CreateCategoriesDto,
  ): Promise<Category> {
    const category = await this.categoryRepo.create(createCategoryDto);
    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepo.findAll();
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepo.findByPk(id);
    return category;
  }

  async deleteById(id: number): Promise<number> {
    const category = await this.categoryRepo.destroy({ where: { id } });
    return category;
  }

  async updateById(
    id: number,
    updateCategoryDto: UpdateCategoriesDto,
  ): Promise<Category> {
    const category = await this.categoryRepo.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    console.log(category);

    return category[1][0];
  }
}
