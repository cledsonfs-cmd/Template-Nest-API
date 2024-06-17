import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
  
    @Column({ name: 'email', type: 'varchar', nullable: false, length: 50 })
    email: string;

    @Column({ name: 'nome', type: 'varchar', nullable: false, length: 50 })
    nome: string;       

    @Column({ name: 'password', type: 'varchar',nullable: false,  length: 8 })
    password: string;

    @Column({ name: 'id_status', type: 'int4',length: 50 })
    idStatus: number;
    
}
