import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.model';
import { CreateUserDto } from '../types/user';
import { Auth, AuthProvider } from '../../auth/domain/auth.model';
import { randomUUID } from 'node:crypto';
import { hash, genSaltSync } from 'bcryptjs';
import { SessionService } from '../../auth/app/sesion.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly sessionService: SessionService,
  ) {}

  getUserById(id: string) {
    return this.userRepository.findOne({
      where: { id },
      relations: {
        auth: true,
      },
    });
  }

  async createUser(data: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: data.email },
      relations: {
        auth: true,
      },
    });

    if (existingUser) {
      if (
        existingUser.auth &&
        existingUser.auth.find((x) => x.provider === AuthProvider.LOCAL)
      ) {
        throw new UnauthorizedException();
      }
      throw new UnauthorizedException();
    }

    const user = new User();
    const idUser = randomUUID();
    const { password, ...raw } = data;
    user.id = idUser;

    if (data.name) user.name = data.name;
    if (data.lastname) user.lastName = data.lastname;
    user.email = data.email;
    user.username = `user${randomUUID().replace(/-/g, '')}`;

    const auth = new Auth();
    auth.provider = AuthProvider.LOCAL;
    auth.providerId = idUser;
    auth.metadata = {
      password: await hash(password, genSaltSync(10)),
    };
    auth.raw = raw;

    user.auth = [auth];

    const newUser = await this.userRepository.save(user);

    return await this.sessionService.create({ id: newUser.id });
  }
}
