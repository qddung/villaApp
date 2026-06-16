import { Module } from '@nestjs/common';
import { VillasController } from './villas.controller';
import { VillasService } from './villas.service';
import { ImagesModule } from '../images/images.module';

@Module({
  imports: [ImagesModule],
  controllers: [VillasController],
  providers: [VillasService],
})
export class VillasModule {}
