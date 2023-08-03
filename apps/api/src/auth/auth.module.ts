import { Module } from '@nestjs/common';
import { AuthService } from './app/auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.model';
import { Auth } from './domain/auth.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Auth])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
