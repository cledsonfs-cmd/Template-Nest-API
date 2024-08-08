import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserHistoricoDto {
  @ApiProperty({ example: 'Descrição' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 'id' })
  id: number;
}
