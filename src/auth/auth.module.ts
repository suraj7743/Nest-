import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.passportStrategy';
import { localStrategy } from './passport.localStrategy';

@Module({
  providers: [AuthService, localStrategy, JwtStrategy],
  imports: [
    PassportModule,
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'thisisthejwtkeysecretneedtohandlelater',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
