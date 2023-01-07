import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDTO } from '../dto/create.dto';
import { FindDTO } from '../dto/find.dto';
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
  async find(@Param() findDTO: FindDTO): Promise<TestEntity> {
    return await this.testService.find(findDTO);
  }

  @Post('create')
  async create(@Body() createDTO: CreateDTO) {
    return await this.testService.create(createDTO);
  }

  @Get('cacheTest')
  async cacheTest() {
    return await this.testService.testCache();
  }
}
