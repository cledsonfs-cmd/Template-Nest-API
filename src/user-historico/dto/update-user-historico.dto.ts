import { CreateUserHistoricoDto } from './create-user-historico.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserHistoricoDto extends PartialType(
  CreateUserHistoricoDto,
) {}
