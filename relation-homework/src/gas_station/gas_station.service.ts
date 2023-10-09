import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { MainStation } from './models/gas_station.model';
import { CreateGasStation } from './dto/create-gas_station.dto';
import { UpdateGasStation } from './dto/update-gas_station.dto';

@Injectable()
export class MainStationService {
    constructor(@InjectModel(MainStation) private mainstationRepo: typeof MainStation) { }

    async createMainstation(createMainstationDto: CreateGasStation): Promise<MainStation> {
        const mainstation = await this.mainstationRepo.create(createMainstationDto)
        return mainstation;
    }

    async findAllMainStation(): Promise<MainStation[]> {
        return this.mainstationRepo.findAll()
    }

    async findById(id: number): Promise<MainStation> {
        const mainstation = await this.mainstationRepo.findByPk(id);
        return mainstation;
    }

    async findByName(main_gas_station_name: string): Promise<MainStation> {
        const mainstation = await this.mainstationRepo.findOne({ where: { main_gas_station_name } });
        return mainstation;
    }

    async deleteById(id: number): Promise<number> {
        const mainstation = await this.mainstationRepo.destroy({ where: { id } });
        return mainstation;
    }

    async updateById(id: number, updateMainStationDto: UpdateGasStation): Promise<MainStation> {
        const mainstation = await this.mainstationRepo.update(updateMainStationDto, {
            where: { id },
            returning: true
        });
        console.log(mainstation);

        return mainstation[1][0]
    }
};
