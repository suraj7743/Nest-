import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  password: string;
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string;
}
export let userData: UserDto[] = [
  {
    username: 'user1',
    password: 'user1-123',
    email: 'user1@gmail.com',
  },
  {
    username: 'user2',
    password: 'user2-123',
    email: 'user2@gmail.com',
  },
  {
    username: 'user3',
    password: 'user3-123',
    email: 'user3@gmail.com',
  },
];
