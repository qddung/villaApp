import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
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

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.villasService.findOne(slug);
  }

  @Post()
  save(@Body() villa: Villa) {
    const savedVilla = this.villasService.save(villa);
    return { success: true, villa: savedVilla };
  }

  @Delete()
  remove(@Body('id') id: string) {
    this.villasService.delete(id);
    return { success: true };
  }
}
