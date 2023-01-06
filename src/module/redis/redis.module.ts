import { Module } from '@nestjs/common';
import { RedisInstance } from './provider/redis-instance.provider';

@Module({
  providers: [
    {
      provide: RedisInstance,
      useFactory: async () => {
        return await RedisInstance.init();
      }
    }
  ],
  exports: [RedisInstance]
})
export class RedisModule {}
