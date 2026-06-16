import { Controller, Get, Post, Delete, Query, Param, Res, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ImagesService } from './images.service';
import type { Response } from 'express';

@ApiTags('Images')
@Controller('api')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('villa-images')
  @ApiOperation({ summary: 'Upload một ảnh villa, trả về ID' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: {
        file: { type: 'string', format: 'binary', description: 'File ảnh' },
        isMain: { type: 'string', enum: ['true', 'false'], description: 'Có phải ảnh chính không' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('isMain') isMain?: string,
  ) {
    return this.imagesService.uploadImage(file, isMain === 'true');
  }

  @Delete('villa-images/:id')
  @ApiOperation({ summary: 'Xóa ảnh theo ID' })
  async deleteImage(@Param('id') id: string) {
    return this.imagesService.deleteImage(id);
  }

  @Get('villa-images')
  @ApiOperation({ summary: 'Lấy danh sách ảnh của villa theo villaId' })
  @ApiQuery({ name: 'villaId', required: true })
  async getImages(@Query('villaId') villaId: string) {
    return this.imagesService.getImagesForVilla(villaId);
  }

  @Get('villa-image/:id')
  @ApiOperation({ summary: 'Serve ảnh binary theo ID' })
  async serveImage(@Param('id') id: string, @Res() res: Response) {
    const { buffer, contentType } = await this.imagesService.serveImage(id);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(buffer);
  }
}
