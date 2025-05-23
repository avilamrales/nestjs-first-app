import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return {
      message: `Ticket number ${num + 14}`,
    };
  }

  @Get('user/active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return {
      message: `User is ${status ? 'active' : 'inactive'}`,
    };
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    return {
      message: `Hello ${query.name}, you are ${query.age} years old`,
    };
  }
}
