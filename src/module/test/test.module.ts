import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TestController } from './controller/test.controller';
import { TestRepository } from './providers/test.repository';
import { TestService } from './service/test.service';

@Module({
  imports: [TestModule, DatabaseModule],
  controllers: [TestController],
  providers: [TestService, ...TestRepository],
})
export class TestModule {}
