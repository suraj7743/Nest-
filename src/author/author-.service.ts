import { Injectable, BadRequestException } from '@nestjs/common';
import { authordata, AuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  //('/author') get request
  getAuthor(): AuthorDto[] {
    return authordata;
  }
  //("/author") post request
  postAuthor(body: AuthorDto): AuthorDto[] {
    authordata.push({
      id: body.id,
      name: body.name,
      age: body.age,
      booktype: body.booktype,
      location: body.location,
    });
    return authordata;
  }
  //("/author:id") update request
  updateAuthor(param: number, body: AuthorDto): AuthorDto {
    if (param > authordata.length || param < 0) {
      throw new BadRequestException("Invalid parameter doesn't exist");
    }
    authordata[param] = {
      id: body.id,
      name: body.name,
      age: body.age,
      booktype: body.booktype,
      location: body.location,
    };
    return authordata[param];
  }
  //("/author/:id") Delete request
  deleteAuthor(param: number): string {
    if (param > authordata.length || param < 0) {
      throw new BadRequestException("Invalid parameter doesn't exist");
    }
    let i;
    for (i = param; i < authordata.length; i++) {
      authordata[i] = authordata[i + 1];
    }
    authordata.length = authordata.length - 1;
    return 'Successfully deleted the required id data ';
  }
}
