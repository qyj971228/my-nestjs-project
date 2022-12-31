import { DataSource } from 'typeorm';

function dataSourceConfig() {
  if (process.env.node_env == 'development') {
    return {
      host: 'localhost',
      username: 'root',
      password: '123456',
      synchronize: true,
    };
  }
  if (process.env.node_env == 'production') {
    return {
      host: '',
      username: '',
      password: '',
      synchronize: false,
    };
  }
  
}

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ...dataSourceConfig(),
        type: 'mysql',
        port: 3306,
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];
