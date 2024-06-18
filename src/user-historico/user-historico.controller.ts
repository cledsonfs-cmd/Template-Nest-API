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

@Controller('user-historico')
export class UserHistoricoController {
  constructor(private readonly userHistoricoService: UserHistoricoService) {}

  @Post()
  create(@Body() createUserHistoricoDto: CreateUserHistoricoDto) {
    return this.userHistoricoService.create(createUserHistoricoDto);
  }

  @Get()
  findAll() {
    return this.userHistoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHistoricoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserHistoricoDto: UpdateUserHistoricoDto,
  ) {
    return this.userHistoricoService.update(id, updateUserHistoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHistoricoService.remove(id);
  }
}
