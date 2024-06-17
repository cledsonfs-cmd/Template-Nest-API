import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { PessoaService } from 'src/pessoa/pessoa.service';

@UseGuards(AuthGuard)
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }

  @Get(':razaoSocial')
  findByRazaoSocial(@Param('razaoSocial') razaoSocial: string) {
    return this.empresaService.findByRazaoSocial(razaoSocial);
  }

  @Get(':nomeFantasia')
  findByNomeFantasia(@Param('nomeFantasia') nomeFantasia: string) {
    return this.empresaService.findByNomeFantasia(nomeFantasia);
  }

  @Get(':cnpj')
  findByCNPJ(@Param('cnpj') cnpj: string) {
    return this.empresaService.findByCNPJ(cnpj);
  }
}
