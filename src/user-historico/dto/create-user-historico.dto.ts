import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class CreateUserHistoricoDto {
  @ApiProperty({ example: 'Descrição' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 'uuid' })
  idUser: string;
}
