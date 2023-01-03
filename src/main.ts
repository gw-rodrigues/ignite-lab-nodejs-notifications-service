import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //used to validate Post data in our app, if data null/empty (normally this is disabled, can slow down our app)
  //if Post data/field is invalid the app send to the requester a error json* message
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
