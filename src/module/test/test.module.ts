import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '../redis/redis.module';
import { TestCache } from './cache/test.cache';
import { PhotoController } from './controller/photo.controller';
import { TestController } from './controller/test.controller';
import { UserController } from './controller/user.controller';
import { UserDao } from './dao/user.dao';
import { PhotoEntity } from './entity/photo.entity';
import { TestEntity } from './entity/test.entity';
import { UserEntity } from './entity/user.entity';
import { PhotoService } from './service/photo.service';
import { TestService } from './service/test.service';
import { UserService } from './service/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity, UserEntity, PhotoEntity]),
    RedisModule,
  ],
  providers: [TestService, UserService, PhotoService, UserDao, TestCache],
  controllers: [TestController, UserController, PhotoController],
})
export class TestModule {}
