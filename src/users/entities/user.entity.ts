import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users', { schema: 'template_nestjs' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
  })
  email: string;

  @Column({ name: 'nome', type: 'varchar', nullable: true, length: 100 })
  nome: string;

  @Column({ name: 'password', type: 'varchar', nullable: false, length: 10 })
  password: string;

  @Column({ name: 'id_status', type: 'int4' })
  idstatus: string;

  @Column({ name: 'id_role', type: 'int4' })
  idrole: number;

  @Column({ name: 'provedor', type: 'text' })
  provedor: number;

  @Column({ name: 'imageUrl', type: 'text' })
  imageUrl: number;
}
