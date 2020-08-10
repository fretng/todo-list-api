import { CallHandler, ExecutionContext, Injectable, NestInterceptor, HttpException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserTokenInterceptor implements NestInterceptor {
    constructor(private authService: AuthService) {}

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        let request = context.switchToHttp().getRequest();
        let token = request.headers.token;
        let userId = await this.authService.getUserIdByToken(token);

        if (userId == null) {
            throw new UnauthorizedException();
        }

        request.body.userId = userId;
        return next.handle();
    }
}
