import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UrlEntity } from './url.entity';
import { UserEntity } from './user.entity';

@Entity('photo')
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: '0' })
  sign: string;

  @OneToMany(() => UrlEntity, (url) => url.photo)
  urls: UrlEntity[];

  @ManyToOne(() => UserEntity, (user) => user.photos)
  user: UserEntity;
}
