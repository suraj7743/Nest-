import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authservice: AuthService) {
    super();
  }
  //need to validate and return the user so that req.user have all the info
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authservice.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
