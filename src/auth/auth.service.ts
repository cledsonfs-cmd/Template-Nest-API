import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{
    uid: string;
    email: string;
    nome: string;
    token: string;
    provedor: string;
    imageUrl: string;
    role: any;
  }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      uid: user.id,
      email: user.email,
      nome: user.email,
      token: access_token,
      provedor: '',
      imageUrl: '',
      role: { nome: user.role },
    };
  }
}
