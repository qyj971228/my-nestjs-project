import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
