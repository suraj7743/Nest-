import { Injectable } from '@nestjs/common';
interface bodyinput {
  name: string;
}
let Book: string[] = ['Hunter'];

@Injectable()
export class BooksService {
  //for get request
  findall(): string[] {
    return Book;
  }
  //for post request
  Add(body: bodyinput): string[] {
    Book.push(body.name);
    return Book;
  }
  //put request having /:id
  update(body: bodyinput, param: number): string[] {
    Book[param] = body.name;
    return Book;
  }
  //delete request having /:id
  delete(param: number): string[] {
    let i: number;
    for (i = param; i < Book.length; i++) {
      Book[i] = Book[i + 1];
    }
    if (param <= Book.length) {
      Book.length = Book.length - 1;
    }
    return Book;
  }
}
