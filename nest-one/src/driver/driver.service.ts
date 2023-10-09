import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Driver } from './models/driver.model';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriverService {
    constructor(@InjectModel(Driver) private driverRepo: typeof Driver) { }

    async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
        const driver = await this.driverRepo.create(createDriverDto)
        return driver;
    }

    async findAllDriver(): Promise<Driver[]> {
        return this.driverRepo.findAll({
            include: {
                all: true
            }
        })
    }

    async findById(id: number): Promise<Driver> {
        const driver = await this.driverRepo.findByPk(id);
        return driver;
    }

    async findByName(firstName: string): Promise<Driver> {
        const driver = await this.driverRepo.findOne({ where: { firstName } });
        return driver;
    }

    async deleteById(id: number): Promise<number> {
        const driver = await this.driverRepo.destroy({ where: { id } });
        return driver;
    }

    async updateById(id: number, updateDriverDto: UpdateDriverDto): Promise<Driver> {
        const driver = await this.driverRepo.update(updateDriverDto, {
            where: { id },
            returning: true
        });
        console.log(driver);

        return driver[1][0]
    }
};