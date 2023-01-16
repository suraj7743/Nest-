import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly authservice: AuthService) {}
  @UseGuards(AuthGuard('local')) //use local strategy to make guard
  @Post()
  async loginUser(@Req() req: Request): Promise<any> {
    return {
      token: await this.authservice.generateToken(req.user),
    };
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  protectedRoute(): string {
    return 'This is jwt protected route';
  }
}
