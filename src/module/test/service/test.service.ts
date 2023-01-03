import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestEntity } from '../entity/test.entity';
import { Test } from '../interface/test.interface';

@Injectable()
export class TestService {

  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepository: Repository<TestEntity>,
  ) {}

  async find(id: number): Promise<TestEntity> {
    return await this.testRepository.findOne({ where: { id } })
  }

  private readonly tests: Test[] = [];

  create(test: Test) {
    this.tests.push(test);
  }

  findAll(): Test[] {
    if (!this.tests.length) {
      throw new BadRequestException();
    }
    return this.tests;
  }
}
