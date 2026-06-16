import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AreasService } from './areas.service';

@ApiTags('Areas')
@Controller('api/areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Get('famous')
  @ApiOperation({ summary: 'Get famous areas for footer display' })
  async getFamousAreas() {
    return this.areasService.getFamousAreas();
  }
}
