import { Test, TestingModule } from '@nestjs/testing';
import { UserHistoricoController } from './user-historico.controller';
import { UserHistoricoService } from './user-historico.service';

describe('UserHistoricoController', () => {
  let controller: UserHistoricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHistoricoController],
      providers: [UserHistoricoService],
    }).compile();

    controller = module.get<UserHistoricoController>(UserHistoricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
