import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {
  
  constructor(@InjectRepository(Pessoa) private readonly repository: Repository<Pessoa>) { }
  
  create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    const pessoa = this.repository.create(createPessoaDto);
    return this.repository.save(pessoa);
  }

  findAll(): Promise<Pessoa[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Pessoa> {
    return this.repository.findOneBy({id: id});
  }
  
  findByEmpresa(idEmpresa: string): Promise<Pessoa[]> {
    return this.repository.findBy({empresa: idEmpresa});
  }

  async update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    const pessoa = await this.repository.preload({
      id: id,
      ...updatePessoaDto,
    });
    if (!pessoa) {
      throw new NotFoundException(`Pessoa ${id} not found`);
    }
    return this.repository.save(pessoa);
  }

  async remove(id: string) {
    const pessoa = await this.findOne(id);
    return this.repository.remove(pessoa);
  }

  findByNome(nome: string): Promise<Pessoa[]> {
    return this.repository.findBy({nome: nome});
  }

  findByProfissao(profissao: string): Promise<Pessoa[]> {
    return this.repository.findBy({profissao: profissao});
  }

  findByCidade(cidade: string): Promise<Pessoa[]> {
    return this.repository.findBy({empresa: cidade});
  }
}
