import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { PhotoEntity } from './photo.entity';
import { TestEntity } from './test.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  firstname: string;

  @Column({ length: 50, default: '' })
  lastname: string;

  @Column({ length: 100, default: '', select: false })
  password: string

  @OneToOne(() => TestEntity, test => test.user)
  @JoinColumn()
  test: TestEntity;

  @OneToMany(() => PhotoEntity, photo => photo.user)
  photos: PhotoEntity[]
}
