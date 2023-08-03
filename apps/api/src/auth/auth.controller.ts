import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './app/auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
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
    const user = await this.authService.findByEmail(email);

    console.log(user);
    return {
      exist: !!user,
    };
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    const data = await this.authService.createUserLocal(body);
    return {
      statusCode: 200,
      message: 'User created',
      data,
    };
  }
}
