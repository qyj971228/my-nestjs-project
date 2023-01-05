import { Controller, Get, Param } from "@nestjs/common";
import { FindDTO } from "../dto/find.dto";
import { PhotoEntity } from "../entity/photo.entity";
import { PhotoService } from "../service/photo.service";

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('/find/:id')
  async find(@Param() findDTO: FindDTO): Promise<PhotoEntity> {
    return await this.photoService.find(findDTO)
  }

}