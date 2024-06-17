import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {    
    createUserDto.idStatus = 1
    const user = await this.usersService.create(createUserDto);
    
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload)

    return {
      uid: user.id,
      email: user.email,
      token,      
    };
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdateUserDto) {
    return this.usersService.update(id, updatePessoaDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
