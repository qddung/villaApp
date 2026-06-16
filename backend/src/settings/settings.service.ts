import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) { }

  async getSettings() {
    let settings = await this.prisma.settings.findFirst();

    if (!settings) {
      settings = await this.prisma.settings.create({
        data: {
          bookingConfirmationTemplate: "Xin chào {CustomerName},\n\nChúng tôi xin xác nhận đơn đặt phòng của bạn tại {VillaName} từ ngày {CheckIn} đến {CheckOut} đã được xác nhận.\n\nCảm ơn bạn đã tin tưởng dịch vụ của chúng tôi!",
        },
      });
    }

    return settings;
  }

  async updateSettings(data: any) {
    const settings = await this.getSettings();
    return this.prisma.settings.update({
      where: { id: settings.id },
      data: {
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        bookingConfirmationTemplate: data.bookingConfirmationTemplate,
      },
    });
  }
}
