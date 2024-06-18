import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from 'src/enum/RoleEnum';
import { StatusEnum } from 'src/enum/StatusEnum';

export class CreateUserDto {
  @ApiProperty({ example: 'email@teste.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'senha' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ name: 'status', enum: StatusEnum })
  status: string;

  @ApiProperty({ name: 'role', enum: RoleEnum })
  role: string;
}
