import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { CategoriesModule } from './categories/categories.module';
import { ComfortModule } from './comfort/comfort.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { Region } from './region/models/region.model';
import { Comfort } from './comfort/models/comfort.model';
import { District } from './district/models/district.model';
import { MailModule } from './mail/mail.module';
import { Category } from './categories/models/category.model';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';
import { CardModule } from './user_cards/user_cards.module';
import { WalletModule } from './user_wallet/user_wallet.module';
import { Wallet } from './user_wallet/models/user_wallet.model';
import { Card } from './user_cards/models/user_card.model';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { Bot } from './bot/models/bot.model';
import { OtpModule } from './otp/otp.module';
import { Otp } from './otp/model/otp.model';
import { StadiumsModule } from './stadiums/stadiums.module';
import { Stadium } from './stadiums/models/stadium.model';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/models/comment.model';
import { StadiumTimesModule } from './stadium-times/stadium-times.module';
import { Time } from './stadium-times/models/stadium-time.model';
import { ComfortStadiumModule } from './comfort-stadium/comfort-stadium.module';
import { ComfortStadium } from './comfort-stadium/models/comfort-stadium.model';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Region,
        Comfort,
        District,
        Category,
        Admin,
        Wallet,
        Card,
        Stadium,
        Bot,
        Otp,
        Comment,
        Time,
        ComfortStadium,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    CategoriesModule,
    ComfortModule,
    RegionModule,
    DistrictModule,
    MailModule,
    AdminModule,
    CardModule,
    WalletModule,
    CardModule,
    BotModule,
    OtpModule,
    StadiumsModule,
    CommentsModule,
    StadiumTimesModule,
    ComfortStadiumModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
