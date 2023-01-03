import { Matches } from 'class-validator';
import { regPositive } from 'src/util/regex.util';

export class FindDTO {
  @Matches(regPositive.match, { message: 'id 不能为: ' + regPositive.message })
  readonly id: number;
}
