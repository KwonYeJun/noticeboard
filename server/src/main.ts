import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(new Logger('debug'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  //정적 페이지 서빙
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));

  await app.listen(3000);
}

bootstrap();