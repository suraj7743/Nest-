import { Body, Controller, Get, ValidationPipe } from '@nestjs/common';
import { Post, Request, UseGuards } from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}
  //get request on ("/user")
  @UseGuards(AuthGuard('local'))
  @Get()
  login(): string {
    return 'login route';
  }
}
