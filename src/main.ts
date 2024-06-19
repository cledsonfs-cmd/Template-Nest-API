import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Api Nest - Template Base')
    .setDescription('Templeta basico para desenvolvimento de APIs em Nest.')
    .setVersion('1.0')
    .addBearerAuth(     
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',)
    .setContact(
      'Cledson Francisco Silva',
      'www.cledsonfs.com.br',
      'cledsonfs@gmail.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
