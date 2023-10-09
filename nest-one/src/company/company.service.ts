import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private companyRepo: typeof Company) { }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const company = await this.companyRepo.create(createCompanyDto)
        return company;
    }

    async findAllCompany(): Promise<Company[]> {
        const companies = await this.companyRepo.findAll({
            include: { all: true },
        });
        return companies;
    }

    async findById(id: number): Promise<Company> {
        const company = await this.companyRepo.findByPk(id);
        return company;
    }

    async findByName(name: string): Promise<Company> {
        const company = await this.companyRepo.findOne({ where: { name } });
        return company;
    }

    async deleteById(id: number): Promise<number> {
        const company = await this.companyRepo.destroy({ where: { id } });
        return company;
    }

    async updateById(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
        const company = await this.companyRepo.update(updateCompanyDto, {
            where: { id },
            returning: true
        });
        console.log(company);

        return company[1][0]
    }
};
