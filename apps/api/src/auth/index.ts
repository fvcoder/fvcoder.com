import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './domain/auth.model';
import { AuthController } from './controller';
import { AuthService } from './app/auth.service';
import { User } from 'src/user/domain/user.model';
import { LocalStrategy } from './app/strategy/local.strategy';
import { JwtStrategy } from './app/strategy/jwt.strategy';
import { RefreshTokenStrategy } from './app/strategy/jwt-refresh.strategy';
import { Session } from './domain/session.model';
import { SessionService } from './app/sesion.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    TypeOrmModule.forFeature([Auth, Session, User]),
  ],
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
