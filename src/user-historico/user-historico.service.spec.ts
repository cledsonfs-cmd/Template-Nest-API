import { Test, TestingModule } from '@nestjs/testing';
import { UserHistoricoService } from './user-historico.service';

describe('UserHistoricoService', () => {
  let service: UserHistoricoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHistoricoService],
    }).compile();

    service = module.get<UserHistoricoService>(UserHistoricoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
