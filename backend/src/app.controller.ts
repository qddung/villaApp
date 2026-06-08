import { Controller, Get, Res, Req, Next } from '@nestjs/common';
import type { Response, Request, NextFunction } from 'express';
import { join } from 'path';

@Controller()
export class AppController {

  @Get('*')
  renderHome(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'));
  }
}
