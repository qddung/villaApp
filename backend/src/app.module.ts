import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VillasModule } from './villas/villas.module';
import { ImagesModule } from './images/images.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, VillasModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
