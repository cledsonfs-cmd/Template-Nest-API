import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './entities/empresa.entity';
import { PessoaModule } from 'src/pessoa/pessoa.module'; 

@Module({
  imports: [TypeOrmModule.forFeature([Empresa]),PessoaModule],
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule {}