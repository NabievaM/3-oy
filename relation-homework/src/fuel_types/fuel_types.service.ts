import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { FuelType } from './models/fuel_types.model';
import { CreateFueltypesDto } from './dto/create-fuel_types.dto';
import { UpdateFueltypesDto } from './dto/update-fuel_types.dto';

@Injectable()
export class FuelTypeService {
    constructor(@InjectModel(FuelType) private fueltypeRepo: typeof FuelType) { }

    async createFuelType(createFuelTypeDto: CreateFueltypesDto): Promise<FuelType> {
        const fueltype = await this.fueltypeRepo.create(createFuelTypeDto)
        return fueltype;
    }

    async findAllFuelType(): Promise<FuelType[]> {
        return this.fueltypeRepo.findAll({
            include: {
                all: true
            }
        });
    }

    async findById(id: number): Promise<FuelType> {
        const fueltype = await this.fueltypeRepo.findByPk(id);
        return fueltype;
    }

    async findByName(name: string): Promise<FuelType> {
        const fueltype = await this.fueltypeRepo.findOne({ where: { name } });
        return fueltype;
    }

    async deleteById(id: number): Promise<number> {
        const fueltype = await this.fueltypeRepo.destroy({ where: { id } });
        return fueltype;
    }

    async updateById(id: number, updateFuelTypeDto: UpdateFueltypesDto): Promise<FuelType> {
        const fueltype = await this.fueltypeRepo.update(updateFuelTypeDto, {
            where: { id },
            returning: true
        });
        console.log(fueltype);

        return fueltype[1][0]
    }
};