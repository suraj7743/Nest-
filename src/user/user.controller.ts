import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('local')) //use local strategy to make guard
  @Post()
  loginUser(@Req() req: Request): string {
    console.log(req.user);
    return 'this is the authenticated site';
  }
}
