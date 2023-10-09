import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { BookModule } from './book/book.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        BookModule,
    ],
    providers: [AppService],
    controllers: [AppController],
    exports: []
})
export class AppModule { };