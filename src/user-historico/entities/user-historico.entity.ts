import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_historico', { schema: 'template_nestjs' })
export class UserHistorico extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'descricao', type: 'varchar', length: 50 })
  descricao: string;

  @Column({ name: 'id_user', type: 'varchar', length: 50 })
  idUser: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
