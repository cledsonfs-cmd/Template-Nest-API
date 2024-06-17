import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDto {
    @ApiProperty({ example: 'Razão Social' })
    @IsString()
    @IsNotEmpty()
    razaoSocial: string;

    @ApiProperty({ example: 'Nome da Empresa' })
    @IsString()
    @IsNotEmpty()
    nomeFantasia: string;

    @ApiProperty({ example: 'email@teste.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: '00.000.000/0000-00' })
    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty({ example: 'Responsável pela Empresa' })
    @IsString()
    @IsNotEmpty()
    responsavel: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    whatsApp: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    celular: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    telefoneFixo: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    cep?: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    logradouro: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    bairro: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    cidade: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    uf: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    numero: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    complemento: string;

    @ApiPropertyOptional({ description: 'Opcional' })
    @IsOptional()
    @IsString()
    logo: string;

}