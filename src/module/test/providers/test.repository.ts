import { DataSource } from 'typeorm';
import { TestEntity } from '../entity/test.entity';

export const TestRepository = [
  {
    provide: 'TEST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TestEntity),
    inject: ['DATA_SOURCE'],
  },
];
