import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AuthService } from './app/auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, existEmailRes } from './types/auth';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(':email')
  @ApiOperation({
    summary: 'Verifica si la dirección de correo existe',
  })
  @ApiResponse({
    status: 200,
    type: existEmailRes,
  })
  async existsEmail(@Param('email') email: string) {
    return {
      exist: !!(await this.authService.findByEmail(email)),
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Crea un nuevo usuario',
  })
  async createUser(@Body() body: CreateUserDto) {
    const data = await this.authService.createUserLocal(body);
    return {
      statusCode: 200,
      message: 'User created',
      data,
    };
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login de usuarios',
  })
  async login(@Body() body: CreateUserDto) {
    return { body };
  }
}
