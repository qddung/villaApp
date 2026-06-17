import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@ApiTags('Areas')
@Controller('api/areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Get()
  @ApiOperation({ summary: 'Get all areas' })
  async findAll() {
    return this.areasService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new area' })
  async create(@Body() createAreaDto: CreateAreaDto) {
    return this.areasService.create(createAreaDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing area' })
  async update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areasService.update(id, updateAreaDto);
  }

  @Get('famous')
  @ApiOperation({ summary: 'Get famous areas for frontend display' })
  async getFamousAreas() {
    return this.areasService.getFamousAreas();
  }
}
