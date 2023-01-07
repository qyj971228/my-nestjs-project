import { IsOptional, IsString } from 'class-validator';

export class CreateDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional() // 可选
  description: string;

  @IsString()
  @IsOptional()
  filename: string;
}
