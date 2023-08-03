import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './user.model';

export enum AuthProvider {
  LOCAL = 'local',
}

@Entity()
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'enum', enum: AuthProvider, default: AuthProvider.LOCAL })
  provider: string;

  @Column()
  providerId: string;

  @ManyToOne(() => User, (user) => user.auth, { eager: true })
  @JoinColumn()
  user: User;

  @Column({ type: 'jsonb' })
  metadata: Record<string, any>;

  @Column({ type: 'jsonb' })
  raw: Record<string, any>;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
