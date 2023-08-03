import { ApiProperty } from '@nestjs/swagger';
import { AuthProvider } from '../domain/auth.model';

export class existEmailRes {
  @ApiProperty()
  exist: boolean;
}

export class CreateUserDto {
  @ApiProperty({ enum: AuthProvider })
  type: AuthProvider;

  @ApiProperty()
  data: Record<string, any>;
}
