import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { configService } from '../../../config/config.service';
import { JWTDto } from '../dto/jwt.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getJWTSecret(),
    });
  }

  /**
   * 
   * @param payload - JWT payload with the format { sub: string, username: string }
   * @returns sets Request.user to { userId: string, username: string }
   */
  async validate(payload: JWTDto): Promise<{userId: string, username: string}> {
    return { userId: payload.sub, username: payload.username };
  }
}