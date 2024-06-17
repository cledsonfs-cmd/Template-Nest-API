/*
    Registre informações detalhadas sobre as empresas, 
    incluindo razão social, nome fantasia, e-mail, CNPJ, 
    responsável, números de contato (WhatsApp, celular e telefone fixo), 
    endereço e logo da empresa. 
*/
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Empresa extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'razao_social', type: 'varchar', nullable: true, length: 100 })
    razaoSocial: string;

    @Column({ name: 'nome_fantasia', type: 'varchar', nullable: true, length: 100 })
    nomeFantasia: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'cnpj', type: 'varchar', length: 100 })
    cnpj: string;

    @Column({ name: 'responsavel', type: 'varchar', length: 100 })
    responsavel: string;

    @Column({ name: 'whatsApp', type: 'varchar', length: 100 })
    whatsApp?: string;

    @Column({ name: 'celular', type: 'varchar', length: 100 })
    celular?: string;

    @Column({ name: 'telefone_fixo', type: 'varchar', length: 100 })
    telefoneFixo?: string;

    @Column({ name: 'cep', type: 'varchar', length: 100 })
    cep?: string;

    @Column({ name: 'logradouro', type: 'varchar', length: 100 })
    logradouro?: string;

    @Column({ name: 'bairro', type: 'varchar', length: 100 })
    bairro?: string;

    @Column({ name: 'cidade', type: 'varchar', length: 100 })
    cidade?: string;

    @Column({ name: 'uf', type: 'varchar', length: 100 })
    uf?: string;

    @Column({ name: 'numero', type: 'varchar', length: 100 })
    numero?: string;

    @Column({ name: 'complemento', type: 'varchar', length: 500 })
    complemento?: string;

    @Column({ name: 'logo', type: 'varchar', length: 100 })
    logo?: string;
}

