import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('test')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, default: '' })
  name: string;

  @Column('text')
  description: string;

  @Column({ default: '' })
  filename: string;

  @Column('int', { default: 0 })
  views: number;

  @Column({ default: false })
  isPublished: boolean;

  @OneToOne(() => UserEntity, user => user.test)
  user: UserEntity
}
