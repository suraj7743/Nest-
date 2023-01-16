import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { authservice } from './auth.service';
import { passportLocal } from './passport.localStrategy';

@Module({
  providers: [passportLocal, authservice],
  controllers: [],
  exports: [],
  imports: [UserModule],
})
export class AuthModule {}
