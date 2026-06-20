import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AmenitiesService } from './amenities.service';

@ApiTags('Amenities')
@Controller('api/amenities')
export class AmenitiesController {
  constructor(private readonly amenitiesService: AmenitiesService) { }

  @Get()
  findAll() {
    return this.amenitiesService.findAll();
  }

  @Get('categories')
  getCategories() {
    return this.amenitiesService.getCategories();
  }

  @Post()
  async create(@Body() data: any) {
    try {
      const amenity = await this.amenitiesService.create(data);
      return { success: true, amenity };
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new BadRequestException('ID (Mã tiện nghi) đã tồn tại.');
      }
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    try {
      const amenity = await this.amenitiesService.update(id, data);
      return { success: true, amenity };
    } catch (error: any) {
      if (error.code === 'P2002' || error.message === 'SLUG_EXISTS') {
        throw new BadRequestException('Tên tiện nghi (slug) đã tồn tại, vui lòng chọn tên khác.');
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.amenitiesService.delete(id);
      return { success: true };
    } catch (error: any) {
      if (error.code === 'P2003') {
        throw new BadRequestException('Không thể xóa tiện nghi này vì đang có Villa sử dụng.');
      }
      throw error;
    }
  }
}
