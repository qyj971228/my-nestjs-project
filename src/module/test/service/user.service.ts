import { Injectable } from "@nestjs/common";
import { UserDao } from "../dao/user.dao";
import { FindDTO } from "../dto/find.dto";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UserService {

  constructor(
    private userDao: UserDao
  ) {}

  async find(findDTO: FindDTO): Promise<UserEntity[]> {
    return await this.userDao.find(findDTO)
  }

}