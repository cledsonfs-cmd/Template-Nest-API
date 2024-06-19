import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
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
    let test;
    await this.userService.findEmail(createUserDto.email).then((user) =>{
      test = user;
    });
    
    if(test===null){  
      let objeto;
      await this.userService.create(createUserDto).then((user) => {
        objeto = user;
        this.userHistoricoService.create({
            descricao: StatusEnum.ATIVO,
            idUser: user.id,
          })
      });
      return objeto;
    }else{
      throw new HttpException('E-mail já utilizado por outro usuário', HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':email')
  findEmail(@Param('email') email: string) {
    return this.userService.findEmail(email);
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
