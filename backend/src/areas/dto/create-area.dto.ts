import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAreaDto {
  @ApiProperty({ example: 'bai-sau', description: 'Slug của khu vực (phải là duy nhất)' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Bãi Sau', description: 'Tên hiển thị của khu vực' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'Bãi biển dài và đẹp...', description: 'Mô tả khu vực' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 'https://...', description: 'Link hình ảnh đại diện' })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiPropertyOptional({ example: false, description: 'Đánh dấu khu vực nổi bật' })
  @IsBoolean()
  @IsOptional()
  isFamous?: boolean;
}
