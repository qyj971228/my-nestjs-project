import { Controller, Get, Param } from "@nestjs/common";
import { FindDTO } from "../dto/find.dto";
import { UserEntity } from "../entity/user.entity";
import { UserService } from "../service/user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/find/:id')
  async find(@Param() findDTO: FindDTO): Promise<UserEntity[]> {
    return await this.userService.find(findDTO)
  }

}