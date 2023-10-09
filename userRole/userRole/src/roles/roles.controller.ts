import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './models/roles.model';

@ApiTags('Rollar')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @ApiOperation({ summary: "Rol yaratish" })
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: "Rollarni ko'rish" })
  @ApiResponse({ status: 200, description: 'List of rolls', type: [Role] })
  @Get()
  findAllRoles(): Promise<Role[]> {
    return this.rolesService.getAllRoles();
  }

  @ApiOperation({ summary: "Rollarni qiymati boyicha korish" })
  @ApiResponse({ status: 200, description: 'Role', type: Role })
  @Get(':value')
  getByRoleValue(@Param('value') value: string) {
    console.log(value);

    return this.rolesService.getRoleByValue(value);
  }
}
