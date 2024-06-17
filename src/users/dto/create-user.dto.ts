import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto { 

  @ApiProperty({ example: 'email@teste.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'senha' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '000000' })
  idStatus: number;
}