import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

import { REDIS } from 'src/config/databse/redis';

@Injectable()
export class RedisInstance {
  static async init(): Promise<Redis> {
    const start = Date.now()
    const redis = new Redis(REDIS);
    redis.on('error', (err) => console.log('RedisModule dependencies Error', err));
    redis.on('connect', () => {
      const end = Date.now()
      console.log(`[Custom]         ${new Date().toLocaleString('zh', { hour12: false }).replace('-', '/')}      LOG [InstanceLoader] RedisModule initialized +${end - start}ms`)
    });
    return redis;
  }
}

