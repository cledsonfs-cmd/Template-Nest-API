import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto { 

  @ApiProperty({ example: 'email@teste.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'senha' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '000000' })
  idPessoa: string;
}