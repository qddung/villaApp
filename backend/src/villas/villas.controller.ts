import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { VillasService } from './villas.service';
import type { Villa } from '../shared/types';

@ApiTags('Villas')
@Controller('api/villas')
export class VillasController {
  constructor(private readonly villasService: VillasService) {}

  @Get()
  findAll() {
    return this.villasService.findAll();
  }

  @Get('filters/default')
  getDefaultFilters() {
    return this.villasService.getDefaultFilters();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.villasService.findOne(slug);
  }

  @Post()
  async create(@Body() villa: Villa) {
    const savedVilla = await this.villasService.create(villa);
    return { success: true, villa: savedVilla };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() villa: Villa) {
    const savedVilla = await this.villasService.update(id, villa);
    return { success: true, villa: savedVilla };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.villasService.delete(id);
    return { success: true };
  }
}
