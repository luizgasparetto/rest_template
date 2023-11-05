import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Swagger } from 'docs/swagger.docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Swagger.build(app);

  await app.listen(process.env.APP_PORT ?? 3000);
}

bootstrap();
