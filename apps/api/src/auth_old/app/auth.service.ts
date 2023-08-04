import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/user.model';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../types/auth';
import { randomUUID } from 'node:crypto';
import { Auth, AuthProvider } from '../domain/auth.model';
import { genSalt, hash } from 'bcryptjs';

export interface loginLocalParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      relations: {
        auth: true,
      },
    });

    return user;
  }

  async createUserLocal({ data }: Pick<CreateUserDto, 'data'>) {
    if (!data.email || !data.password) {
      throw new BadRequestException('Email and password are required');
    }
    const { password, ...raw } = data;

    const exist = !!(await this.findByEmail(data.email));

    if (exist) {
      throw new BadRequestException('Email already exists');
    }

    const id = randomUUID();

    const user = new User();
    user.id = id;
    user.email = data.email;
    user.username = data.username ?? `user${randomUUID().replace(/-/g, '')}`;

    const auth = new Auth();
    auth.provider = AuthProvider.LOCAL;
    auth.providerId = id;
    auth.metadata = {
      password: await hash(password, await genSalt(10)),
    };

    user.auth = [auth];
    auth.raw = raw;

    return await this.userRepository.save(user);
  }

  loginLocal({ email, password }: loginLocalParams) {
    return {
      token: 'token',
      refresh: 'refresh',
    };
  }
}
