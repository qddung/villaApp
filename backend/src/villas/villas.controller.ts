import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { VillasService } from './villas.service';
import { Villa } from '../shared/types';

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
