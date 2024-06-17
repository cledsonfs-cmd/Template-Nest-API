import { Inject, Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Injectable()
export class EmpresaService {

  @Inject(PessoaService)
  private readonly pessoaService: PessoaService;

  constructor(@InjectRepository(Empresa) private readonly repository: Repository<Empresa>) { }

  create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const empresa = this.repository.create(createEmpresaDto);
    return this.repository.save(empresa);
  }

  findAll(): Promise<Empresa[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Empresa> {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    const empresa = await this.repository.preload({
      id: id,
      ...updateEmpresaDto,
    });
    if (!empresa) {
      throw new NotFoundException(`Empresa ${id} not found`);
    }
    return this.repository.save(empresa);
  }

  async remove(id: string) {

    const pessoas = this.pessoaService.findByEmpresa(id);
    if (pessoas) {
      throw new NotFoundException(`Não foi possivel excluir a empresa ${id}, devido ter pessoas associadas a mesma.`);
    }

    const empresa = await this.findOne(id);
    return this.repository.remove(empresa);
  }

  findByRazaoSocial(razaoSocial: string): Promise<Empresa[]> {
    return this.repository.findBy({razaoSocial: razaoSocial});
  }

  findByNomeFantasia(nomeFantasia: string): Promise<Empresa[]> {
    return this.repository.findBy({ nomeFantasia: nomeFantasia });
  }

  findByCNPJ(cnpj: string): Promise<Empresa> {
    return this.repository.findOneBy({ cnpj: cnpj });
  }
}
