import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { PrismaService } from '../../prisma';
import { AuthProvider } from '../types/auth';

interface LocalCredential {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateLocal({ email, password }: LocalCredential): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email, active: true },
      include: { auth: true },
    });

    if (user && user.auth.find((x) => x.provider === AuthProvider.LOCAL)) {
      const metadata = user.auth.find((x) => x.provider === AuthProvider.LOCAL)
        .metadata as Record<string, any>;
      const passwordCompare = await compare(
        password,
        metadata.password as string,
      );
      if (passwordCompare) {
        return {
          id: user.id,
        };
      }
    }
    return null;
  }
}
