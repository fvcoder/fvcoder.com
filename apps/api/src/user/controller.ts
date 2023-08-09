import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
  Req,
  UnauthorizedException,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '../common/guards/refershToken.guard';
import { Request } from 'express';
import { UserService } from './app/user.service';
import { CreateUserDto } from './types/user';

@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtiene la informacion del usuario' })
  async getCurrentUserData(@Req() req: Request) {
    if (!req.user || !req.user['id']) {
      throw new UnauthorizedException();
    }

    const data = await this.userService.getUserById(req.user['id']);
    return {
      statusCode: 200,
      data: {
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        username: data.username,
        discordId: data.discordId,
        active: data.active,
        banned: data.banned,
        auth: data.auth.map((auth) => ({
          provider: auth.provider,
          createAt: auth.createAt,
        })),
      },
    };
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiBody({ type: CreateUserDto })
  async createNewUser(@Body() user: CreateUserDto) {
    return {
      statusCode: 200,
      data: await this.userService.createUser(user),
    };
  }

  @Patch()
  @ApiOperation({ summary: 'TODO: Actualiza la informacion del usuario' })
  updateUserData() {
    return {
      statusCode: 200,
      message: 'Hello World',
      data: 'user',
    };
  }

  @Delete()
  @ApiOperation({ summary: 'TODO: Elimina el usuario' })
  deleteUserData() {
    return {
      statusCode: 200,
      message: 'Hello World',
      data: 'user',
    };
  }
}
