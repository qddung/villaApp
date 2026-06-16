import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VillasModule } from './villas/villas.module';
import { ImagesModule } from './images/images.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AreasModule } from './areas/areas.module';

@Module({
  imports: [PrismaModule, VillasModule, ImagesModule, BookingsModule, AuthModule, UsersModule, SettingsModule, DashboardModule, AreasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
