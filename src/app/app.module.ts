import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from '.././middleware/logger.middleware';
import { TestController } from '../module/test/controller/test.controller';
import { TestModule } from '.././module/test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MYSQL } from 'src/config/databse/mysql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MYSQL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TestController);
  }
}
