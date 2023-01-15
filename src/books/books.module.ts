import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { bookmiddleware } from './book.middleware';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bookmiddleware).forRoutes({
      path: '/books',
      method: RequestMethod.GET,
    });
  }
}
