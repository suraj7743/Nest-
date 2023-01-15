import { IsString } from 'class-validator';

export class bookdto {
  @IsString()
  name: string;
}
