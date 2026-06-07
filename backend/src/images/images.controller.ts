import { Controller, Get, Post, Delete, Query, Body, UseInterceptors, UploadedFile, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { Response } from 'express';

@Controller('api')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) { }

  @Get('villa-images')
  getImages(@Query('slug') slug: string) {
    return this.imagesService.getImagesForVilla(slug);
  }

  @Post('villa-images')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @Body('slug') slug: string,
    @Body('type') type: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.imagesService.uploadImage(slug, type, file);
  }

  @Delete('villa-images')
  deleteImage(@Body('slug') slug: string, @Body('imageUrl') imageUrl: string) {
    return this.imagesService.deleteImage(slug, imageUrl);
  }

  @Get('villa-image/*')
  serveImage(@Param('0') imagePath: string, @Res() res: Response) {
    const { buffer, contentType } = this.imagesService.serveImage(imagePath);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(buffer);
  }
}
