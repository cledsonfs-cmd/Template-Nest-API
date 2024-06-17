import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { PessoaService } from '../pessoa/pessoa.service'
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, 
        //private pessoaService: PessoaService
        ) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: CreateUserDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}