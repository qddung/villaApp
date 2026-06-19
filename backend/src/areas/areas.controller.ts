import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createAreaDto: CreateAreaDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (typeof createAreaDto.isFamous === 'string') {
      createAreaDto.isFamous = createAreaDto.isFamous === 'true';
    }
    return this.areasService.create(createAreaDto, file);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing area' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string, 
    @Body() updateAreaDto: UpdateAreaDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (typeof updateAreaDto.isFamous === 'string') {
      updateAreaDto.isFamous = updateAreaDto.isFamous === 'true';
    }
    return this.areasService.update(id, updateAreaDto, file);
  }

  @Get('famous')
  @ApiOperation({ summary: 'Get famous areas for frontend display' })
  async getFamousAreas() {
    return this.areasService.getFamousAreas();
  }

  @Get(':id/image')
  @ApiOperation({ summary: 'Get area image' })
  async getImage(@Param('id') id: string, @Res() res: Response) {
    const imageArea = await this.areasService.getImage(id);
    res.set('Content-Type', imageArea.mimeType);
    res.send(imageArea.data);
  }
}
