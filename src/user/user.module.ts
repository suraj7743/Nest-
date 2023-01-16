import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CONSTANTS } from './role.constant';
import { RoleGuard } from './role.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: RoleGuard,
      useValue: new RoleGuard(CONSTANTS.Role.ADMIN || CONSTANTS.Role.LOCAL),
    },
  ],
  exports: [UserService],
  imports: [AuthModule],
})
export class UserModule {}
