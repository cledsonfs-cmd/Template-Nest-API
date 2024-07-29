import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

//@SwaggerModule('ssss')
@ApiTags('cats')
export class SignInDto {
  @ApiProperty({ example: 'email', description: 'Efetuar login no sistema' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
