import {
  Controller,
  Post,
  Delete,
  Put,
  UseGuards,
  Req,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './app/auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './app/jwt.guard';
import { Public } from './app/isPublic.decorator';
import { Logauth, LoginLocalCredentials, RefreshToken } from './types/auth';

@ApiTags('Auth')
@UseGuards(JwtAuthGuard)
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @Public()
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
    const data = await this.authService.login(req.user);
    return {
      statusCode: 200,
      data,
    };
  }

  @Put()
  @Public()
  @ApiBody({
    type: RefreshToken,
    examples: {
      refersh: {
        value: {
          token: 'eyJhbGciOi...',
          refreshToken: 'eyJhbGciOi...',
        },
      },
    },
  })
  @ApiOperation({ summary: 'Refresca la sesion' })
  async refreshToken(@Body() body: RefreshToken) {
    if (!body.token || !body.refreshToken) {
      throw new UnauthorizedException();
    }

    return {
      statusCode: 200,
      data: await this.authService.refershToken(body),
    };
  }

  @Delete()
  @Public()
  @ApiOperation({ summary: 'Elimina la sesion' })
  @ApiBody({
    type: Logauth,
    examples: {
      logout: {
        value: {
          token: 'eyJhbGciOi...',
        },
      },
    },
  })
  async logout(@Body() body: Logauth) {
    if (!body.token) {
      throw new UnauthorizedException();
    }
    await this.authService.logout(body.token);
    return {
      statusCode: 200,
      message: 'Ok',
    };
  }
}
