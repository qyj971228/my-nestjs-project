import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDTO } from '../dto/create.dto';
import { FindDTO } from '../dto/find.dto';
import { TestEntity } from '../entity/test.entity';
import { Test } from '../interface/test.interface';

@Injectable()
export class TestService {

  constructor(
    @InjectRepository(TestEntity)
    private testRepository: Repository<TestEntity>,
  ) {}

  async find(findDTO: FindDTO): Promise<TestEntity> {
    return await this.testRepository
      .createQueryBuilder('test')
      .innerJoinAndSelect('test.user', 'user')
      .where('test.id = :id', { id: findDTO.id })
      .getOne()
  }

  async create(createDTO: CreateDTO) {
    const res = await this.testRepository.save(createDTO)
    return res
  }

  private tests: Test[] = [];

  // create(test: Test) {
  //   this.tests.push(test);
  // }

  findAll(): Test[] {
    if (!this.tests.length) {
      throw new BadRequestException();
    }
    return this.tests;
  }
}
