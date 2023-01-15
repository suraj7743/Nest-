import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  Req,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { bookdto } from './book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(public bookservice: BooksService) {}

  @Get()
  findall() {
    return this.bookservice.findall();
  }
  @Post()
  Add(@Body(new ValidationPipe()) body: bookdto) {
    return this.bookservice.Add(body);
  }
  @Put('/:id')
  update(
    @Body() body: { name: string },
    @Param('id', ParseIntPipe) param: number,
  ) {
    return this.bookservice.update(body, param);
  }
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) param: number) {
    return this.bookservice.delete(param);
  }
}
