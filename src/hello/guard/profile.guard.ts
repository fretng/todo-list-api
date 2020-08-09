import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        let req = context.switchToHttp().getRequest();
        let token = req.headers.token;
        if (token == '123456') {
            return true;
        }

        return false;
    }
}
