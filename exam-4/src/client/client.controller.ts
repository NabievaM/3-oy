import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { ClientService } from './client.service';
import { Client } from './models/client.model';
import { CreateClientDto } from './dto/create-client.dto';
import { LoginClientDto } from './dto/login-client.dto';
import { ClientGuard } from '../guards/client.guard';
import { FindClientDto } from './dto/find-client.dto';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('Clients')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({ summary: 'Register client' })
  @ApiResponse({ status: 201, type: Client })
  @Post('signup')
  registration(
    @Body() createClientDto: CreateClientDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.clientService.registration(createClientDto, res);
  }

  @ApiOperation({ summary: 'Login Client' })
  @ApiResponse({ status: 200, type: Client })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(
    @Body() loginClientDto: LoginClientDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.clientService.login(loginClientDto, res);
  }

  @ApiOperation({ summary: 'Activate client' })
  @ApiResponse({ status: 200, type: [Client] })
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.clientService.activate(link);
  }

  @ApiOperation({ summary: 'Logout Client' })
  @ApiResponse({ status: 200, type: Client })
  @HttpCode(HttpStatus.OK)
  @UseGuards(ClientGuard)
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.clientService.logout(refreshToken, res);
  }

  @ApiOperation({ summary: 'Refresh Client' })
  @ApiResponse({ status: 200, type: [Client] })
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.clientService.refreshToken(+id, refreshToken, res);
  }

  @ApiOperation({ summary: 'Find Client' })
  @UseGuards(AdminGuard)
  @Post('find')
  findAll(@Body() findClientDto: FindClientDto): Promise<Client[]> {
    return this.clientService.findAll(findClientDto);
  }
}
