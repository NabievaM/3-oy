import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module';
import { BotModule } from 'src/bot/bot.module';
import { Otp } from 'src/otp/model/otp.model';
import { OtpModule } from 'src/otp/otp.module';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Otp]),
    JwtModule.register({}),
    MailModule,
    BotModule,
    OtpModule,
    SmsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
