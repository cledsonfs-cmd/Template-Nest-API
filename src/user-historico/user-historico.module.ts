import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHistorico } from './entities/user-historico.entity';
import { UserHistoricoController } from './user-historico.controller';
import { UserHistoricoService } from './user-historico.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserHistorico])],
  controllers: [UserHistoricoController],
  providers: [UserHistoricoService],
  exports: [UserHistoricoService],
})
export class UserHistoricoModule {}
