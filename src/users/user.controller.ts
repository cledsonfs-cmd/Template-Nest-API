import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserHistoricoService } from 'src/user-historico/user-historico.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly userHistoricoService: UserHistoricoService,
  ) {}

  @ApiBearerAuth('Bearer')
  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @ApiBearerAuth('Bearer')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiBearerAuth('Bearer')
  @Get(':email')
  findEmail(@Param('email') email: string) {
    return this.userService.findEmail(email);
  }

  @ApiBearerAuth('Bearer')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiBearerAuth('Bearer')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
