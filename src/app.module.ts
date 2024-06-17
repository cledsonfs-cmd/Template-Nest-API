import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { EmpresaModule } from './empresa/empresa.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // url: process.env.DATABASE_URL,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
      type: 'postgres',
     host: process.env.DB_HOST,
     port: parseInt(process.env.DB_PORT),
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE,
     entities: [__dirname + '/**/*.entity{.ts,.js}'],
     synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    }),
    PessoaModule,
    EmpresaModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
