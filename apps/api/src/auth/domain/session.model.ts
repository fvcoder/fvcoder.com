import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userId!: string;

  @Column()
  token: string;

  @Column()
  refreshToken: string;

  @Column({ type: 'timestamptz' })
  expireAt: Date;

  @CreateDateColumn()
  createAt?: Date;
}
