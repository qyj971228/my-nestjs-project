import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FindDTO } from "../dto/find.dto";
import { PhotoEntity } from "../entity/photo.entity";
import { TestEntity } from "../entity/test.entity";
import { UrlEntity } from "../entity/url.entity";
import { UserEntity } from "../entity/user.entity";
import Redis from 'ioredis';
import { RedisInstance } from "src/module/redis/provider/redis-instance.provider";
@Injectable()
export class UserDao {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @Inject(RedisInstance)
    private redis: Redis
  ) {}

  async find(findDTO: FindDTO): Promise<UserEntity[]> {

    await this.redis.set('test', 'test')
    const res = await this.redis.get('test')
    console.log(res)

    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndMapOne('user.test', TestEntity, 'test', 'test.id = user.testId')
      .leftJoinAndMapMany('user.photos', PhotoEntity, 'photo', 'photo.userId = user.id')
      .leftJoinAndMapMany('photo.url', UrlEntity, 'url', 'url.photoId = photo.id')
      .where('user.test = :id', { id: findDTO.id })
      .select(['user.firstname', 'user.lastname', 'photo', 'url', 'test.name'])
      .getMany()
    // return await this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.test', 'test')
    //   .leftJoinAndSelect('user.photos', 'photo')
    //   .leftJoinAndSelect('photo.urls', 'url')
    //   .where('user.test = :id', { id: findDTO.id })
    //   .select(['user.firstname', 'user.lastname', 'test.name', 'photo', 'url'])
    //   .getMany()
    // return await this.userRepository.find({
    //   select: ['firstname', 'lastname', 'test'],
    //   relations: ["test", "photos", 'photos.urls'],
    //   where: { id: findDTO.id },
    // })
  }

}