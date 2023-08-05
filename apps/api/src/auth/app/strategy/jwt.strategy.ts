import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET ?? 'secret',
      ignoreExpiration: true,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const token = req.get('Authorization').replace('Bearer', '').trim();
    return { ...payload, token };
  }
}
