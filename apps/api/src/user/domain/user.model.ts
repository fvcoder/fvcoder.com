import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Auth } from './../../auth/domain/auth.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  lastName: string;

  @Column()
  email: string;

  @Column({ default: '' })
  phone: string;

  @Column({ unique: true })
  username: string;

  @Column({ default: '' })
  discordId: string;

  @OneToMany(() => Auth, (auth) => auth.user, { cascade: true })
  auth: Auth[];

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  banned: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  deletedAt: Date;

  /* ---- Acciones Del Usuario ---- */
  @Column({ default: '' })
  tokenRecoveryPassword: string;

  @Column({ default: '' })
  tokenChangeEmail: string;

  @Column({ default: '' })
  tokenChangePhone: string;

  @Column({ default: '' })
  tokenMagicLink: string;
}
