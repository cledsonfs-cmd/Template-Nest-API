import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private pessoaService: PessoaService
  ) { }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload)

    if (user?.idPessoa) {
      const pessoa = await this.pessoaService.findOne(user.idPessoa)
      return {
        uid: user.id,
        email: user.email,
        token,
        pessoa
      };
    } else {
      return {
        uid: user.id,
        email: user.email,        
        token
      };
    }

  }
}