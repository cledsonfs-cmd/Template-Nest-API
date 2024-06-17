import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('pessoa')
export class PessoaController {

  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }

  @Get()
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(':idEmpresa')
  findByEmpresa(@Param('idEmpresa') idEmpresa: string) {
    return this.pessoaService.findByEmpresa(idEmpresa);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(id);
  }

  @Get(':nome')
  findByNome(@Param('nome') nome: string) {
    return this.pessoaService.findByNome(nome);
  }

  @Get(':idEmpresa')
  findByProfissao(@Param('profissao') profissao: string) {
    return this.pessoaService.findByProfissao(profissao);
  }

  @Get(':idEmpresa')
  findByCidade(@Param('cidade') cidade: string) {
    return this.pessoaService.findByCidade(cidade);
  }
}
