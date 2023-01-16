import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
@Injectable()
export class RoleGuard implements CanActivate {
  private rolepass: string;
  constructor(role: string) {
    this.rolepass = role;
  }
  canActivate(context: ExecutionContext): boolean {
    const cxt = context.switchToHttp();
    const request = cxt.getRequest();
    if (request.user.role === this.rolepass) {
      return true;
    }
    throw new UnauthorizedException(
      "Role doesn't match you cann't visit this route",
    );
  }
}
