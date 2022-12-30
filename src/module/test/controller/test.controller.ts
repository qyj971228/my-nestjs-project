import { Controller, Get, Param } from '@nestjs/common';
import { TestEntity } from '../entity/test.entity';
import { Test } from '../interface/test.interface';
import { TestService } from '../service/test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('findAll')
  findAll(): Test[] {
    return this.testService.findAll();
  }

  @Get('/find/:id')
  async find(@Param('id') id: number): Promise<TestEntity> {
    return await this.testService.find(id)
  }
}
