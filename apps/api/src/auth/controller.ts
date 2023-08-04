import { Controller, Post, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './app/auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './app/jwt.guard';
import { Public } from './app/isPublic.decorator';

class LoginLocalCredentials {
  email: string;
  password: string;
}

@ApiTags('Auth')
@UseGuards(JwtAuthGuard)
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @Public()
  @ApiBody({ type: LoginLocalCredentials })
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
  @ApiBearerAuth()
  @ApiOperation({ summary: 'TODO Refresca la sesion' })
  refreshToken() {
    return {
      statusCode: 200,
      message: 'Ok',
      data: {
        token: 'token',
        refresh: 'refresh',
      },
    };
  }

  @Delete()
  @ApiOperation({ summary: 'TODO Elimina la sesion' })
  logout() {
    return {
      statusCode: 200,
      message: 'Ok',
    };
  }
}
