import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        url: process.env.POSTGRES_URI,
        synchronize: true,
        entities: [__dirname + '/**/*.model{.ts,.js}'],
      }),
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
