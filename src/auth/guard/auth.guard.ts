import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        let req = context.switchToHttp().getRequest();
        let token = req.headers.token;
        let rs = await this.authService.isTokenValid(token);

        return rs;
    }
}
