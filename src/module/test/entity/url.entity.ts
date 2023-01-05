import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PhotoEntity } from './photo.entity';

@Entity('url')
export class UrlEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  val: string

  @ManyToOne(() => PhotoEntity, photo => photo.urls)
  photo: PhotoEntity
}
