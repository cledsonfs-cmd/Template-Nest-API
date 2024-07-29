import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const objeto = this.repository.create(createUserDto);

    return this.repository.save(objeto);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(email: string): Promise<User> {
    return this.repository.findOneBy({ email: email });
  }

  findEmail(email: string): Promise<User> {
    return this.repository.findOneBy({ email: email });
  }

  async update(uid: string, updateUserDto: UpdateUserDto): Promise<User> {
    const objeto = await this.repository.preload({
      uid: uid,
      ...updateUserDto,
    });
    if (!objeto) {
      throw new NotFoundException(`User ${uid} not found`);
    }
    return this.repository.save(objeto);
  }

  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
