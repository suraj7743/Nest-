import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { userData, UserDto } from './user.dto';

@Injectable()
export class UserService {
  finduser(username: string): UserDto {
    return userData.find((e) => e.username === username);
  }
}
