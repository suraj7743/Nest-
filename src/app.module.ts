import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';
@Module({
  imports: [BooksModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
