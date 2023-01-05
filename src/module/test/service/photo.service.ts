import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FindDTO } from "../dto/find.dto";
import { PhotoEntity } from "../entity/photo.entity";

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(PhotoEntity)
    private photoRepository: Repository<PhotoEntity>,
  ) {}

  async find(findDTO: FindDTO): Promise<PhotoEntity> {
    return await this.photoRepository
      .createQueryBuilder('photo')
      .innerJoinAndSelect('photo.user', 'user')
      .where('photo.id = :id', { id: findDTO.id })
      .getOne()
  }

}