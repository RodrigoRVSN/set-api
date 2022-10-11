import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT ?? 4444;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SET Swagger Document')
    .setDescription('The SET api document')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}
bootstrap();
