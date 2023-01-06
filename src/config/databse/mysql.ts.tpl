import { TypeOrmModule } from "@nestjs/typeorm"

export const MYSQL: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  synchronize: 'true',
}