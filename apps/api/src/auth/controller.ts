import {
  Controller,
  Post,
  Delete,
  Put,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LoginLocalCredentials } from './types/auth';
import { SessionService } from './app/sesion.service';
import { RefreshTokenGuard } from './../common/guards/token.guard';
import { AccessTokenGuard } from './../common/guards/refershToken.guard';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  @ApiBody({
    type: LoginLocalCredentials,
    examples: {
      login: {
        value: {
          email: 'a@email.com',
          password: '123',
        },
      },
    },
  })
  @ApiOperation({ summary: 'Inicia Sesion' })
  @UseGuards(AuthGuard('local'))
  async loginUser(@Req() req: Request) {
    if (!req.user || !req.user['id']) {
      throw new UnauthorizedException();
    }
    const data = await this.sessionService.create({ id: req.user['id'] });
    return {
      statusCode: 200,
      data,
    };
  }

  @Put()
  @UseGuards(RefreshTokenGuard)
  @ApiOperation({ summary: 'Refresca la sesion' })
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresca la sesion' })
  async refreshToken(@Req() req: Request) {
    if (!req.user || !req.user['id'] || !req.user['refreshToken']) {
      throw new UnauthorizedException();
    }

    const data = await this.sessionService.update(
      req.user['id'],
      req.user['refreshToken'],
    );
    return {
      statusCode: 200,
      data,
    };
  }

  @Delete()
  @ApiOperation({ summary: 'Elimina la sesion' })
  @ApiBearerAuth()
  @UseGuards(AccessTokenGuard)
  async logout(@Req() req: Request) {
    if (!req.user || !req.user['id'] || !req.user['token']) {
      throw new UnauthorizedException();
    }
    await this.sessionService.delete(req.user['id'], req.user['token']);
    return {
      statusCode: 200,
      message: 'Ok',
    };
  }
}
