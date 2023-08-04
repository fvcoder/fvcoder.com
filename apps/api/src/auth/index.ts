import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './domain/auth.model';
import { AuthController } from './controller';
import { AuthService } from './app/auth.service';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './../user';
import { User } from 'src/user/domain/user.model';
import { LocalStrategy } from './app/local.strategy';
import { JwtStrategy } from './app/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forFeature([Auth, User]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: () => ({
        secret: process.env.JWT_SECRET ?? 'secret',
        signOptions: {
          expiresIn: '7d',
        },
      }),
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
