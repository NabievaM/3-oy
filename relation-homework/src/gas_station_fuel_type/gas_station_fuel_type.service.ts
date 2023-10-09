import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { GasStationFuelType } from './models/gas_station_fuel_type.model';
import { CreateGasStationFuelType } from './dto/create-gas_station_fuel_type.dto';
import { UpdateGasStationFuelType } from './dto/update.gas_station_fuel_type.dto';

@Injectable()
export class GasStationFuelTypeService {
    constructor(@InjectModel(GasStationFuelType) private gasStationFuelTypeRepo: typeof GasStationFuelType) { }

    async createGasStationFuelType(createGasStationFuelTypeDto: CreateGasStationFuelType): Promise<GasStationFuelType> {
        const gasStationFuelType = await this.gasStationFuelTypeRepo.create(createGasStationFuelTypeDto)
        return gasStationFuelType;
    }

    async findAllGasStationFuelType(): Promise<GasStationFuelType[]> {
        return this.gasStationFuelTypeRepo.findAll({
            include: {
                all: true
            }
        });
    }

    async findById(id: number): Promise<GasStationFuelType> {
        const gasStationFuelType = await this.gasStationFuelTypeRepo.findByPk(id);
        return gasStationFuelType;
    }

    async deleteById(id: number): Promise<number> {
        const gasStationFuelType = await this.gasStationFuelTypeRepo.destroy({ where: { id } });
        return gasStationFuelType;
    }

    async updateById(id: number, updateGasStationFuelTypeDto: UpdateGasStationFuelType): Promise<GasStationFuelType> {
        const gasStationFuelType = await this.gasStationFuelTypeRepo.update(updateGasStationFuelTypeDto, {
            where: { id },
            returning: true
        });
        console.log(gasStationFuelType);

        return gasStationFuelType[1][0]
    }
};
