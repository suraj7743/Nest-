import { Injectable } from '@nestjs/common';
import { user } from './user.entity';
import { CONSTANTS } from './role.constant';

@Injectable()
export class UserService {
  private userdata: user[] = [
    {
      username: 'user1',
      password: 'user1',
      email: 'user1@gmail.com',
      role: CONSTANTS.Role.ADMIN,
    },
    {
      username: 'user2',
      password: 'user2',
      email: 'user2@gmail.com',
      role: CONSTANTS.Role.LOCAL,
    },
    {
      username: 'user3',
      password: 'user3',
      email: 'user3@gmail.com',
      role: CONSTANTS.Role.LOCAL,
    },
  ];
  //in user we only search whether the provided user has record on the database or not
  async findUser(username: string): Promise<user | undefined> {
    return this.userdata.find((user) => user.username === username) || null;
  }
}
