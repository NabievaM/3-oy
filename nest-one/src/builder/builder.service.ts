import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Injectable()
export class BuilderService {
    constructor(@InjectModel(Builder) private builderRepo: typeof Builder) { }

    async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
        const builder = await this.builderRepo.create(createBuilderDto)
        return builder;
    }

    async findAllBuilder(): Promise<Builder[]> {
        return this.builderRepo.findAll({
            include: {
                all: true
            }
        })
    }

    async findById(id: number): Promise<Builder> {
        const builder = await this.builderRepo.findByPk(id);
        return builder;
    }

    async findByName(fullName: string): Promise<Builder> {
        const builder = await this.builderRepo.findOne({ where: { fullName } });
        return builder;
    }

    async deleteById(id: number): Promise<number> {
        const builder = await this.builderRepo.destroy({ where: { id } });
        return builder;
    }

    async updateById(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder> {
        const builder = await this.builderRepo.update(updateBuilderDto, {
            where: { id },
            returning: true
        });
        console.log(builder);

        return builder[1][0]
    }
};
