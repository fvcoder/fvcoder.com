import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/domain/user.model';
import { Repository } from 'typeorm';
import { compare } from 'bcryptjs';
import { AuthProvider } from '../domain/auth.model';

interface LocalCredential {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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
}
