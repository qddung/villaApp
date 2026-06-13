import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('settings')
@UseGuards(JwtAuthGuard)
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getSettings(@Request() req: any) {
    return this.settingsService.getSettings(req.user.tenantId);
  }

  @Patch()
  updateSettings(@Request() req: any, @Body() updateData: any) {
    return this.settingsService.updateSettings(req.user.tenantId, updateData);
  }
}
