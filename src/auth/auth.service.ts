import { Injectable, UnauthorizedException } from '@nestjs/common';
import { user } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UserService) {}
  //in auth service we need to match for the password of the user
  async validateUser(username: string, password: string): Promise<user | null> {
    const user = await this.userservice.findUser(username);
    if (user == undefined || user == null) {
      throw new UnauthorizedException('Cannot find the username credentials');
    }
    if (user.password != password) {
      throw new UnauthorizedException("Password doesn't Match ");
    }

    return user;
  }
}
