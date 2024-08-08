import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserHistoricoDto } from './dto/create-user-historico.dto';
import { UpdateUserHistoricoDto } from './dto/update-user-historico.dto';
import { UserHistorico } from './entities/user-historico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserHistoricoService {
  constructor(
    @InjectRepository(UserHistorico)
    private readonly repository: Repository<UserHistorico>,
  ) {}

  create(createUserHistoricoDto: CreateUserHistoricoDto) {
    const userHistorico = this.repository.create(createUserHistoricoDto);
    return this.repository.save(userHistorico);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateUserHistoricoDto: UpdateUserHistoricoDto) {
    const userHistorico = await this.repository.preload({
      id: id,
      ...updateUserHistoricoDto,
    });
    if (!userHistorico) {
      throw new NotFoundException(`Historico ${id} not found`);
    }
    return this.repository.save(userHistorico);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
