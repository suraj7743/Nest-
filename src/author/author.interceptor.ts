import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  Res,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class AuthorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const cxt = context.switchToHttp();
    const Request = cxt.getRequest();
    Request.body.name = 'MY name is suraj chapagain';
    const Response = cxt.getResponse();
    return next.handle().pipe(
      map((data) => {
        data.push({
          id: 4,
          name: 'ranjan',
          age: 34,
          booktype: 'creative',
          location: 'turkey',
        });
        return data;
      }),
    );
  }
}
