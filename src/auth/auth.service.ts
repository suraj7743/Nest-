import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';

import { UserService } from 'src/user/user.service';
@Injectable()
export class authservice {
  constructor(private userservice: UserService) {}
  validateUser(username: string, password: string) {
    const user = this.userservice.finduser(username);
    if (user === undefined) {
      throw new UnauthorizedException("User doesn't found ");
    }
    if (user.password != password) {
      throw new UnauthorizedException("Password doesn't matched");
    }
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
