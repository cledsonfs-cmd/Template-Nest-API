import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

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

  @Column({ name: 'status', type: 'text' })
  status: string;

  @Column({ name: 'role', type: 'text' })
  role: string;
}
