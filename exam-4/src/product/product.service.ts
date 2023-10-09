import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private readonly fileService: FilesService,
  ) {}

  async create(createProductDto: CreateProductDto, image: any) {
    console.log(image);
    const fileName = await this.fileService.createFile(image);
    const product = await this.productRepository.create({
      ...createProductDto,
      image: fileName,
    });
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findByPk(id);
    return product;
  }

  async deleteById(id: number): Promise<number> {
    const product = await this.productRepository.destroy({ where: { id } });
    return product;
  }

  async updateImage(id: number, image: any) {
    const removeFile = await this.remove(id);
    console.log('remove', removeFile);

    if (!removeFile) {
      throw new BadRequestException("Don't remove image");
    }

    const createFile = await this.fileService.createFile(image);
    const updateFile = await this.productRepository.update(
      {
        image: createFile,
      },
      { where: { id }, returning: true },
    );
    return updateFile;
  }

  async remove(id: number) {
    const post = await this.productRepository.findOne({ where: { id } });

    if (!post) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.fileService.removeFile(post.image);
  }
}
