import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async getSettings(tenantId: string) {
    let settings = await this.prisma.settings.findUnique({
      where: { tenantId },
    });

    if (!settings) {
      settings = await this.prisma.settings.create({
        data: {
          tenantId,
          bookingConfirmationTemplate: "Xin chào {CustomerName},\n\nChúng tôi xin xác nhận đơn đặt phòng của bạn tại {VillaName} từ ngày {CheckIn} đến {CheckOut} đã được xác nhận.\n\nCảm ơn bạn đã tin tưởng dịch vụ của chúng tôi!",
        },
      });
    }

    return settings;
  }

  async updateSettings(tenantId: string, data: any) {
    return this.prisma.settings.upsert({
      where: { tenantId },
      update: {
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        bookingConfirmationTemplate: data.bookingConfirmationTemplate,
      },
      create: {
        tenantId,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        bookingConfirmationTemplate: data.bookingConfirmationTemplate || "Xin chào {CustomerName},\n\nChúng tôi xin xác nhận đơn đặt phòng của bạn tại {VillaName} từ ngày {CheckIn} đến {CheckOut} đã được xác nhận.",
      },
    });
  }
}
