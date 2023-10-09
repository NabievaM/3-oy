import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './models/client.model';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { LoginClientDto } from './dto/login-client.dto';
import { FindClientDto } from './dto/find-client.dto';
import { Op } from 'sequelize';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client) private readonly clientRepo: typeof Client,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async getTokens(client: Client) {
    const jwtPayload = {
      id: client.id,
      is_active: client.is_active,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async registration(createClientDto: CreateClientDto, res: Response) {
    const client = await this.clientRepo.findOne({
      where: { email: createClientDto.email },
    });
    if (client) {
      throw new BadRequestException('Email already exists!');
    }

    const hashed_password = await bcrypt.hash(createClientDto.password, 7);
    const newClient = await this.clientRepo.create({
      ...createClientDto,
      password: hashed_password,
    });
    const tokens = await this.getTokens(newClient);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const uniqueKey: string = v4();

    const updatedClient = await this.clientRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
        activation_link: uniqueKey,
      },
      { where: { id: newClient.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 20 * 60 * 60 * 1000,
      httpOnly: true,
    });

    try {
      await this.mailService.sendClientConfirmation(updatedClient[1][0]);
    } catch (error) {
      console.log(error);
    }

    const response = {
      message: 'Client registered',
      user: updatedClient[1][0],
      tokens,
    };
    return response;
  }

  async login(loginClientDto: LoginClientDto, res: Response) {
    const { email, password } = loginClientDto;
    const client = await this.clientRepo.findOne({ where: { email } });
    if (!client) {
      throw new UnauthorizedException('Client not registered');
    }
    if (!client.is_active) {
      throw new BadRequestException('Client is not active');
    }
    const isMatchPass = await bcrypt.compare(password, client.password);
    if (!isMatchPass) {
      throw new UnauthorizedException('Client not registered(pass)');
    }
    const tokens = await this.getTokens(client);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedClient = await this.clientRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: client.id }, returning: true },
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'Client logged in',
      client: updatedClient[1][0],
      tokens,
    };
    return response;
  }

  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found');
    }

    const updateClient = await this.clientRepo.update(
      { is_active: true },
      { where: { activation_link: link, is_active: false }, returning: true },
    );

    if (!updateClient[1][0]) {
      throw new BadRequestException('Client already activated.');
    }

    const response = {
      message: 'Client activated successfully',
      client: updateClient,
    };

    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const clientData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!clientData) {
      throw new ForbiddenException('Client not found');
    }
    const updatedClient = await this.clientRepo.update(
      { hashed_refresh_token: null },
      { where: { id: clientData.id }, returning: true },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'Client logged out successfully',
      client: updatedClient[1][0],
    };
    return response;
  }

  async refreshToken(client_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (client_id != decodedToken['id']) {
      throw new BadRequestException('client not found');
    }
    const client = await this.clientRepo.findOne({ where: { id: client_id } });
    if (!client || !client.hashed_refresh_token) {
      throw new BadRequestException('client not found');
    }
    const tokentMatch = await bcrypt.compare(
      refreshToken,
      client.hashed_refresh_token,
    );
    if (!tokentMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const tokens = await this.getTokens(client);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedClient = await this.clientRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: client.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'Client refreshed',
      client: updatedClient[1][0],
      tokens,
    };
    return response;
  }

  async findAll(findClientDto: FindClientDto) {
    const where = {};
    if (findClientDto.email) {
      where['email'] = {
        [Op.like]: `%${findClientDto.email}%`,
      };
    }
    if (findClientDto.firstName) {
      where['firstName'] = {
        [Op.like]: `%${findClientDto.firstName}%`,
      };
    }
    if (findClientDto.phone) {
      where['phone'] = {
        [Op.like]: `%${findClientDto.phone}%`,
      };
    }
    console.log(where);

    const clients = await Client.findAll({ where });
    if (!clients) {
      throw new BadRequestException('client not found');
    }
    return clients;
  }
}
