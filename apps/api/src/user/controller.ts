import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/common/guards/refershToken.guard';

@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  @Get()
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'TODO: Obtiene la informacion del usuario' })
  getCurrentUserData() {
    return {
      statusCode: 200,
      message: 'Hello World',
      data: 'user',
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
