import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1723140587435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS template_nestjs`);
    await queryRunner.query(
      `CREATE TABLE template_nestjs.users (
      	id bigserial NOT NULL,
        nome varchar(255) NOT NULL,
        email varchar(255) NOT NULL,        
        "password" varchar(255) NOT NULL,        
        id_role int4 DEFAULT 0 NOT NULL,
        id_status int4 DEFAULT 0 NOT NULL,
        provedor varchar(255) DEFAULT ''::character varying NOT NULL,
        "imageUrl" varchar(255) DEFAULT ''::character varying NOT NULL,
        CONSTRAINT template_laravel_users_email_unique UNIQUE (email),
        CONSTRAINT users_pkey PRIMARY KEY (id)
      );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE template_nestjs.users`);
  }
}
