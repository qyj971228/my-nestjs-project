import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindDTO } from '../dto/find.dto';
import { UserEntity } from '../entity/user.entity';
@Injectable()
export class UserDao {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async find(findDTO: FindDTO): Promise<UserEntity[]> {
    // const sql = this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndMapOne('user.test', TestEntity, 'test', 'test.id = user.testId')
    //   .leftJoinAndMapMany('user.photos', PhotoEntity, 'photo', 'photo.userId = user.id')
    //   .leftJoinAndMapMany('photo.url', UrlEntity, 'url', 'url.photoId = photo.id')
    //   .where('user.test = :id', { id: findDTO.id })
    //   .select(['user.firstname', 'user.lastname', 'photo,sign', 'url.val', 'test.name'])
    //   .getSql()
    // console.log(sql)

    // return await this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndMapOne('user.test', TestEntity, 'test', 'test.id = user.testId')
    //   .leftJoinAndMapMany('user.photos', PhotoEntity, 'photo', 'photo.userId = user.id')
    //   .leftJoinAndMapMany('photo.url', UrlEntity, 'url', 'url.photoId = photo.id')
    //   .where('user.test = :id', { id: findDTO.id })
    //   .select(['user.firstname', 'user.lastname', 'photo.sign', 'url.val', 'test.name'])
    //   .getMany()
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.test', 'test') // 参数: (自动连接外键对应的表, 外键表别名)
      .leftJoinAndSelect('user.photos', 'photo')
      .leftJoinAndSelect('photo.urls', 'url')
      .where('user.test = :id', { id: findDTO.id })
      .select([
        'user.firstname', // 表名.字段名
        'user.lastname',
        'test.name',
        'photo.sign',
        'url.val',
      ])
      .getMany(); // getRaw会获得未整理的数据, 结合AS进行重命名
    // return await this.userRepository.find({
    //   select: ['firstname', 'lastname', 'test'],
    //   relations: ["test", "photos", 'photos.urls'],
    //   where: { id: findDTO.id },
    // })
  }
}
