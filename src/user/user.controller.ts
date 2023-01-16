import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { CONSTANTS } from './role.constant';
import { RoleGuard } from './role.guard';

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
  //to check whether jwt token is send for not
  @UseGuards(AuthGuard('jwt'))
  @Get()
  protectedRoute(@Req() req: Request): any {
    return 'This is jwt protected route  ';
  }
  //authorization according to role
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.Role.ADMIN))
  @Get('/admin')
  AdminRoute(): string {
    return 'this is Admin Route';
  }
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.Role.LOCAL))
  @Get('/local')
  LocalRoute(): string {
    return 'THis is local route';
  }
}
