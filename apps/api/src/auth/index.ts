import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller';
import { AuthService } from './app/auth.service';
import { LocalStrategy } from './app/strategy/local.strategy';
import { JwtStrategy } from './app/strategy/jwt.strategy';
import { RefreshTokenStrategy } from './app/strategy/jwt-refresh.strategy';
import { SessionService } from './app/sesion.service';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    SessionService,
    LocalStrategy,
    JwtStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthService, SessionService],
})
export class AuthModule {}
