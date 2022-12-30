import { DataSource } from 'typeorm';

const path = require("path");
const fs = require("fs");
const dotEnv = require("dotenv");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp(".env");

dotEnv.config({ path: `${pathsDotenv}.${process.env.node_env}` })

function dataSourceConfig(): {
  host: string;
  username: string;
  password: string;
  synchronize: boolean;
} {
  return {
    host: process.env.host,
    username: process.env.mysqlusername,
    password: process.env.mysqlpassword,
    synchronize: process.env.node_env == 'development' ? true : false,
  };
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
