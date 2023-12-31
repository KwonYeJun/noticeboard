import { Controller, Get, Res, Req } from '@nestjs/common';

import { Response, Request } from 'express';
import { join } from 'path';
@Controller()
export class PageController {
  // 마지막에 실행 될 모듈로써 페이지를 반환 한다.
  @Get('*')
  serveFile(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..','..', '..','client', 'build', 'index.html');
    return res.sendFile(filePath);
  }

}
