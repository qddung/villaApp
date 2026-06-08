import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(); // Allow frontend to access API
  
  const config = new DocumentBuilder()
    .setTitle('Villa API')
    .setDescription('API documentation for Villa App. Import this into Postman.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  // Serve static files from the frontend's dist directory
  app.useStaticAssets(join(__dirname, '..', '..', 'frontend', 'dist'));

  await app.listen(process.env.PORT ?? 3001); // Run backend on port 3001
}
bootstrap();
