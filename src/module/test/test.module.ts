import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TestController } from './controller/test.controller';
import { TestProviders } from './providers/test.providers';
import { TestService } from './service/test.service';

@Module({
  imports: [TestModule, DatabaseModule],
  controllers: [TestController],
  providers: [TestService, ...TestProviders],
})
export class TestModule {}
