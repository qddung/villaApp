import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow frontend to access API
  await app.listen(process.env.PORT ?? 3001); // Run backend on port 3001
}
bootstrap();
