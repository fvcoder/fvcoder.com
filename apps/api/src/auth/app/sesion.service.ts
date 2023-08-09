import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as dayjs from 'dayjs';
import { PrismaService } from '../../prisma';

interface CreateSession {
  id: string;
}

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
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

    await this.prisma.session.create({
      data: {
        userId: id,
        token,
        refreshToken: refershToken,
        expireAt: dayjs().add(7, 'days').toDate(),
      },
    });

    return {
      token,
      refershToken,
    };
  }

  async update(userId: string, refreshToken: string) {
    const oldSession = await this.prisma.session.findFirst({
      where: {
        userId,
        refreshToken,
      },
    });

    if (!oldSession) {
      throw new UnauthorizedException();
    }

    const newSession = await this.create({ id: oldSession.id });
    await this.prisma.session.delete({
      where: {
        id: oldSession.id,
      },
    });

    return newSession;
  }

  async delete(userId: string, token: string) {
    const currentSession = await this.prisma.session.findFirst({
      where: {
        userId,
        token,
      },
    });

    if (!currentSession) {
      return Promise.resolve();
    }

    await this.prisma.session.delete({
      where: {
        id: currentSession.id,
      },
    });
    return Promise.resolve();
  }
}
