import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { localStrategy } from './passport.localStrategy';

@Module({
  providers: [AuthService, localStrategy],
  imports: [UserModule],
})
export class AuthModule {}
