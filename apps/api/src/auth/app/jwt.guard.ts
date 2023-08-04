import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './isPublic.decorator';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly authService: AuthService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return new Promise<boolean>(async (resolve) => {
      const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());

      if (isPublic) return resolve(true);
      const token = this.getToken(context.switchToHttp().getRequest());
      if (!(await this.authService.verifyToken(token))) {
        resolve(false);
      }
      resolve(super.canActivate(context) as unknown as boolean);
    });
  }

  protected getToken(request: {
    headers: Record<string, string | string[]>;
  }): string {
    const authorization = request.headers['authorization'];
    if (!authorization || Array.isArray(authorization)) {
      throw new Error('Invalid Authorization Header');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, token] = authorization.split(' ');
    return token;
  }
}
