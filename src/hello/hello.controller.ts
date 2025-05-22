import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {
  @Get()
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).send({
      message: 'Hello World',
    });
  }

  @Get('hello')
  @HttpCode(201)
  getHello() {
    return {
      message: 'Hello from hello endpoint',
    };
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return {
      message: 'Page not found',
    };
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return { message: 'Error page!!' };
  }
}
