import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/domain/user.model';
import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import { AuthProvider } from '../domain/auth.model';
import { Session } from '../domain/session.model';
import * as dayjs from 'dayjs';
import { sign } from 'jsonwebtoken';
import { RefreshToken } from '../types/auth';

interface LocalCredential {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async validateLocal({ email, password }: LocalCredential): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: { auth: true },
    });

    if (user && user.auth.find((x) => x.provider === AuthProvider.LOCAL)) {
      const passwordCompare = await compare(
        password,
        user.auth.find((x) => x.provider === AuthProvider.LOCAL).metadata
          .password,
      );

      if (passwordCompare) {
        return {
          id: user.id,
        };
      }
    }
    return null;
  }

  async login(user: any) {
    const token = this.jwtService.sign({ user: user.id });
    const session = new Session();
    session.userId = user.id;
    session.token = token;
    session.refreshToken = sign(
      { user: user.id },
      process.env.REFRESH_TOKEN_SECRET ?? 'refresh',
    );
    session.expireAt = dayjs().add(7, 'days').toDate();
    const currentSession = await this.sessionRepository.save(session);
    return {
      token: currentSession.token,
      refresh: currentSession.refreshToken,
      expireAt: currentSession.expireAt.toISOString(),
    };
  }

  async verifyToken(token: string) {
    const session = await this.sessionRepository.findOne({
      where: {
        token,
      },
    });

    return !!session;
  }

  async refershToken({ token, refreshToken }: RefreshToken) {
    const { user } = await this.jwtService.verifyAsync(token);

    const session = await this.sessionRepository.findOne({
      where: {
        userId: user,
        token,
        refreshToken,
      },
    });
    if (!session) {
      throw new UnauthorizedException('Token invalid');
    }
    const refersh = await this.login({ id: user }).catch(console.log);

    await this.sessionRepository.remove(session);
    return refersh;
  }

  async logout(token: string) {
    const session = await this.sessionRepository.findOne({
      where: {
        token,
      },
    });
    return await this.sessionRepository.remove(session);
  }
}
