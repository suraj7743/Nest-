import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthorDto {
  @IsNumber()
  id: number;
  @IsString()
  @MinLength(3)
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  booktype: string;
  @IsString()
  @IsOptional()
  location: string;
}
export let authordata: AuthorDto[];
authordata = [
  {
    id: 1,
    name: 'robert',
    age: 39,
    booktype: 'lovestory',
    location: 'Newyork',
  },
  {
    id: 2,
    name: 'Michael',
    age: 31,
    booktype: 'science-fiction',
    location: 'Portugal',
  },
  {
    id: 3,
    name: 'Simpson',
    age: 29,
    booktype: 'Thriller',
    location: 'India',
  },
];
