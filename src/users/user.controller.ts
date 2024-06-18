import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { UserHistoricoService } from 'src/user-historico/user-historico.service';
import { StatusEnum } from 'src/enum/StatusEnum';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly userHistoricoService: UserHistoricoService,
  ) {}

  @Public()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    let objeto;
    await this.userService.create(createUserDto).then((user) => {
      objeto = user;
    });
    const historico = {
      descricao: StatusEnum.ATIVO,
      user: objeto,
    };
    this.userHistoricoService.create(historico);

    return objeto;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
