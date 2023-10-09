import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MyValidationPipe } from './pipe/validation.pipe';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3003;
    app.useGlobalPipes(new MyValidationPipe());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('User-role Project')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NestJS,Postgress,Sequielize')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.listen(PORT, () => {
      console.log(`Server ${PORT} da ishga tushdi`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
