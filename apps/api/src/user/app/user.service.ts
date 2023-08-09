import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../types/user';
import { randomUUID } from 'node:crypto';
import { hash, genSaltSync } from 'bcryptjs';
import { PrismaService } from '../../prisma';
import { SessionService } from '../../auth/app/sesion.service';
import { AuthProvider } from '../../auth/types/auth';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sessionService: SessionService,
  ) {}

  getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { auth: true },
    });
  }

  async createUser(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: { email: data.email, active: true },
    });

    if (existingUser) {
      throw new UnauthorizedException();
    }

    const idUser = randomUUID();
    const username = `user${randomUUID().replace(/-/g, '')}`;
    const { password, ...raw } = data;

    const newUser = await this.prisma.user.create({
      data: {
        id: idUser,
        name: data.name ?? '',
        lastName: data.lastname ?? '',
        email: data.email,
        username,
        ousername: username,
        auth: {
          create: {
            provider: AuthProvider.LOCAL,
            providerId: idUser,
            metadata: {
              password: await hash(password, genSaltSync(10)),
            },
            raw,
          },
        },
      },
    });

    return newUser;
    return await this.sessionService.create({ id: newUser.id });
  }
}
