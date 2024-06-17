/*
    Registre informações detalhadas sobre as pessoas, 
    incluindo nome, e-mail, data de nascimento, sexo, 
    profissão, empresa em que trabalha (se aplicável), 
    números de contato (WhatsApp e celular), endereço e foto.
*/
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pessoa extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')    
    id: string;   

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'nome', type: 'varchar', nullable: true, length: 100 })
    nome: string;

    @Column({ name: 'email', type: 'varchar', nullable: true, length: 100 })
    email: string;

    @Column({ name: 'data_nascimento', nullable: true, type: 'timestamptz' })
    dataNascimento: Date;

    @Column({ name: 'sexo', nullable: true, type: 'varchar', length: 100 })
    sexo: string;

    @Column({ name: 'profissao', nullable: true, type: 'varchar', length: 100 })
    profissao: string;

    @Column({ name: 'empresa', nullable: true, type: 'varchar', length: 100 })
    empresa?: string;

    @Column({ name: 'whatsApp', nullable: true, type: 'varchar', length: 100 })
    whatsApp?: string;

    @Column({ name: 'celular', nullable: true, type: 'varchar', length: 100 })
    celular?: string;

    @Column({ name: 'cep', nullable: true, type: 'varchar', length: 100 })
    cep?: string;

    @Column({ name: 'logradouro', nullable: true, type: 'varchar', length: 100 })
    logradouro?: string;

    @Column({ name: 'bairro', nullable: true, type: 'varchar', length: 100 })
    bairro?: string;

    @Column({ name: 'cidade', nullable: true, type: 'varchar', length: 100 })
    cidade?: string;

    @Column({ name: 'uf', nullable: true, type: 'varchar', length: 100 })
    uf?: string;

    @Column({ name: 'numero', nullable: true, type: 'varchar', length: 100 })
    numero?: string;

    @Column({ name: 'complemento', nullable: true, type: 'varchar', length: 500 })
    complemento?: string;

    @Column({ name: 'foto', nullable: true, type: 'varchar', length: 100 })
    foto?: string;  
    
    @Column({ name: 'provedor', nullable: true, type: 'varchar', length: 100 })
    provedor?: string;  
}