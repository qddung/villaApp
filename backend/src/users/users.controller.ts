import { Controller, Get, Patch, Body, UseGuards, Req, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: any) {
    const userId = req.user.userId;
    const user = await this.usersService.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    
    return {
      profile: {
        id: user.id,
        email: user.email,
        full_name: user.fullName,
        phone: user.phone,
        role: user.role,
        tenant_id: user.tenantId,
        created_at: user.createdAt,
      }
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Req() req: any, @Body() updateData: { fullName?: string; phone?: string }) {
    const userId = req.user.userId;
    await this.usersService.updateProfile(userId, updateData);
    return { success: true };
  }

  // Not strictly needing auth for now as UI might need it, but adding guard is safe
  @UseGuards(JwtAuthGuard)
  @Get('tenants/:id')
  async getTenant(@Param('id') id: string) {
    const tenant = await this.usersService.getTenant(id);
    if (!tenant) throw new NotFoundException('Tenant not found');
    return tenant;
  }
}
