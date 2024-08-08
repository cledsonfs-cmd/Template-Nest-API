import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

//@SwaggerModule('ssss')
@ApiTags('cats')
export class SignInDto {
  @ApiProperty({ example: 'username', description: 'Efetuar login no sistema' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
