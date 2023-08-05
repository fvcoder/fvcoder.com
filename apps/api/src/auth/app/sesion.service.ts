import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from '../domain/session.model';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';

interface CreateSession {
  id: string;
}

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  /**
   * Creates a new session.
   *
   * @param {CreateSession} param - The session data.
   * @return {Promise<{ token: string, refershToken: string }>} - The created session tokens.
   */
  async create({ id }: CreateSession) {
    const [token, refershToken] = await Promise.all([
      this.jwtService.signAsync(
        { id },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ) as Promise<string>,
      this.jwtService.signAsync(
        { id },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ) as Promise<string>,
    ]);

    const session = new Session();
    session.userId = id;
    session.token = token;
    session.refreshToken = refershToken;
    session.expireAt = dayjs().add(7, 'days').toDate();

    await this.sessionRepository.save(session);

    return {
      token,
      refershToken,
    };
  }

  async update(userId: string, refreshToken: string) {
    const oldSession = await this.sessionRepository.findOne({
      where: {
        userId,
        refreshToken,
      },
    });

    if (!oldSession) {
      throw new UnauthorizedException();
    }

    const newSession = await this.create({ id: oldSession.id });
    await this.sessionRepository.remove(oldSession);

    return newSession;
  }

  async delete(userId: string, token: string) {
    const currentSession = await this.sessionRepository.findOne({
      where: {
        userId,
        token,
      },
    });

    if (!currentSession) {
      return Promise.resolve();
    }

    await this.sessionRepository.remove(currentSession);
    return Promise.resolve();
  }
}
