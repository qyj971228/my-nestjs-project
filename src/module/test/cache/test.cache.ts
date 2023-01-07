import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisInstance } from 'src/module/redis/provider/redis-instance.provider';
@Injectable()
export class TestCache {
  constructor(
    @Inject(RedisInstance)
    private redis: Redis,
  ) {}

  async cacheTest(): Promise<string> {
    await this.redis.set('test', 'this is a redis inject test');
    const res = await this.redis.get('test');
    return res;
  }
}
