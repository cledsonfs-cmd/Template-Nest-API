import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserHistoricoModule } from 'src/user-historico/user-historico.module';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserHistoricoModule],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
