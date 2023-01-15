import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Post,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthorService } from './author-.service';
import { AuthorDto } from './author.dto';
import { Authorguard } from './author.guard';
import { AuthorInterceptor } from './author.interceptor';

@Controller('author')
export class AuthorController {
  constructor(public authorservice: AuthorService) {}
  //get
  @Get()
  @UseGuards(new Authorguard())
  @UseInterceptors(new AuthorInterceptor())
  getAuthor(): AuthorDto[] {
    return this.authorservice.getAuthor();
  }
  //post
  @Post()
  postAuthor(@Body(new ValidationPipe()) body: AuthorDto) {
    return this.authorservice.postAuthor(body);
  }
  //update
  @Put('/:id')
  updateAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) body: AuthorDto,
  ) {
    return this.authorservice.updateAuthor(id, body);
  }
  //delete
  @Delete('/:id')
  deleteAuthor(@Param('id', ParseIntPipe) id: number) {
    return this.authorservice.deleteAuthor(id);
  }
}
