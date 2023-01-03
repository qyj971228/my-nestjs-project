import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from '.././middleware/logger.middleware';
import { TestController } from '../module/test/controller/test.controller';
import { TestModule } from '.././module/test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { host, password, database, synchronize } from 'src/config/databse/mysql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host,
      port: 3306,
      username: 'root',
      password,
      database,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize,
    }),
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TestController);
  }
}
