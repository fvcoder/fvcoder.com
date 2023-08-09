import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from './app/user.service';
import { AuthModule } from '../auth';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
