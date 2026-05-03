import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common'
import { MessagesModule } from './messages/messages.module';
import { AiModule } from './ai/ai.module';

async function bootstrap() {
  const app = await NestFactory.create(AiModule);
  //This is to set the pipes globally but this will not be apply to every route unless you call it.
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
