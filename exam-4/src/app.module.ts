import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModule } from './role/role.module';
import { Role } from './role/models/role.model';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';
import { ClientModule } from './client/client.module';
import { ClientWalletModule } from './client_wallet/client_wallet.module';
import { CategoryModule } from './category/category.module';
import { FilesModule } from './files/files.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { Product } from './product/models/product.model';
import { Category } from './category/models/category.model';
import { Client } from './client/models/client.model';
import { Wallet } from './client_wallet/models/client_wallet.model';
import { BasketModule } from './basket/basket.module';
import { Basket } from './basket/models/basket.model';
import { OrderModule } from './order/order.module';
import { Order } from './order/models/order.model';
import { HistoryModule } from './history/history.module';
import { History } from './history/models/history.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Role,
        Admin,
        Product,
        Category,
        Client,
        Wallet,
        Basket,
        Order,
        History,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    RoleModule,
    AdminModule,
    ClientModule,
    ClientWalletModule,
    CategoryModule,
    FilesModule,
    ProductModule,
    BasketModule,
    OrderModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
