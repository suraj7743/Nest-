import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserDto } from 'src/user/user.dto';
import { authservice } from './auth.service';

@Injectable()
export class passportLocal extends PassportStrategy(Strategy) {
  constructor(private authservice: authservice) {
    super();
  }
  validate(username: string, password: string): UserDto {
    const user = this.authservice.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
