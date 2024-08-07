import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserHistoricoService } from './user-historico.service';
import { CreateUserHistoricoDto } from './dto/create-user-historico.dto';
import { UpdateUserHistoricoDto } from './dto/update-user-historico.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user-historico')
@ApiTags('User')
export class UserHistoricoController {
  constructor(private readonly userHistoricoService: UserHistoricoService) {}

  @ApiBearerAuth('Bearer')
  @Post()
  create(@Body() createUserHistoricoDto: CreateUserHistoricoDto) {
    return this.userHistoricoService.create(createUserHistoricoDto);
  }

  @ApiBearerAuth('Bearer')
  @Get()
  findAll() {
    return this.userHistoricoService.findAll();
  }

  @ApiBearerAuth('Bearer')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userHistoricoService.findOne(id);
  }

  @ApiBearerAuth('Bearer')
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserHistoricoDto: UpdateUserHistoricoDto,
  ) {
    return this.userHistoricoService.update(id, updateUserHistoricoDto);
  }

  @ApiBearerAuth('Bearer')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userHistoricoService.remove(id);
  }
}
