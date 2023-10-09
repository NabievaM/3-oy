import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepo.create(createRoleDto);
    return role;
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Role> {
    const role = await this.roleRepo.findByPk(id);
    return role;
  }

  async deleteById(id: number): Promise<number> {
    const role = await this.roleRepo.destroy({ where: { id } });
    return role;
  }

  async updateById(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepo.update(updateRoleDto, {
      where: { id },
      returning: true,
    });
    console.log(role);

    return role[1][0];
  }
}
