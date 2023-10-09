import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './models/role.model';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @ApiOperation({ summary: 'Add Role' })
  @UseGuards(AdminGuard)
  @Post('create')
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: 'View all roles' })
  @ApiResponse({ status: 200, description: 'List of roles', type: [Role] })
  @UseGuards(AdminGuard)
  @Get('all')
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @ApiOperation({ summary: 'View role by id' })
  @ApiResponse({ status: 200, description: 'Role', type: Role })
  @UseGuards(AdminGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Role> {
    return this.roleService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete role' })
  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.roleService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Role edit' })
  @UseGuards(AdminGuard)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.roleService.updateById(+id, updateRoleDto);
  }
}
