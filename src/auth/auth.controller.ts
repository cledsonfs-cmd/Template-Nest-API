import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { StatusEnum } from 'src/enum/StatusEnum';
import { UserHistoricoService } from 'src/user-historico/user-historico.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('api')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UsersService,
    private readonly userHistoricoService: UserHistoricoService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('refresh')
  reresh(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @ApiBearerAuth('Bearer')
  @Post('logout')
  logout() {
    return "{ message: 'Logout efetuado com sucesso!'}";
  }

  @Public()
  @Post('/register')
  @ApiTags('Auth')
  async create(@Body() createUserDto: CreateUserDto) {
    let test;
    await this.userService.findEmail(createUserDto.email).then((user) => {
      test = user;
    });

    if (test === null) {
      let objeto;
      await this.userService.create(createUserDto).then((user) => {
        objeto = user;
        this.userHistoricoService.create({
          descricao:
            'Usuario ' +
            user.email +
            ' criado com o status ' +
            StatusEnum.ATIVO,
          id: user.id,
        });
      });
      return objeto;
    } else {
      throw new HttpException(
        'E-mail já utilizado por outro usuário',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
