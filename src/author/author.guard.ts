import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class Authorguard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const cxt = context.switchToHttp();
    const request = cxt.getRequest();
    return true;
  }
}
