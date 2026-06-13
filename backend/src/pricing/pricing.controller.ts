import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('villas/:villaId/pricing')
@UseGuards(JwtAuthGuard)
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post()
  create(@Param('villaId') villaId: string, @Body() createData: any, @Request() req: any) {
    return this.pricingService.create(villaId, createData, req.user.tenantId);
  }

  @Get()
  findAll(@Param('villaId') villaId: string, @Request() req: any) {
    return this.pricingService.findAll(villaId, req.user.tenantId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: any, @Request() req: any) {
    return this.pricingService.update(id, updateData, req.user.tenantId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.pricingService.remove(id, req.user.tenantId);
  }
}
