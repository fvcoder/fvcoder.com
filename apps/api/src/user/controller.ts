import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/common/guards/refershToken.guard';
import { Request } from 'express';
import { UserService } from './app/user.service';

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
  @ApiOperation({ summary: 'TODO: Crea un nuevo usuario' })
  createNewUser() {
    return {
      statusCode: 200,
      message: 'Hello World',
      data: 'user',
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
