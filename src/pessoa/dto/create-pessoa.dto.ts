import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePessoaDto {

    @ApiProperty({ example: 'Nome' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ example: 'email@teste.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'dd/MM/yyyy' })
    @IsDate()
    @IsNotEmpty()
    dataNascimento: Date;

    @ApiProperty({ example: 'Masculino ou Feminino' })
    @IsString()
    @IsNotEmpty()
    sexo: string;

    @ApiProperty({ example: 'Analista de Sistemas' })
    @IsString()
    @IsNotEmpty()
    profissao: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    empresa?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    whatsApp?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    celular?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    cep?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    logradouro?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    bairro?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    cidade?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    uf?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    numero?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    complemento?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    foto?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    provedor?: string; 

}









