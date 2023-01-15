import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response, Request, NextFunction } from 'express';

//global middleware

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
