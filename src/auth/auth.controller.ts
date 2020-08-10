import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthToken } from './entity/auth.entity';
import { AuthDto } from './auth.dto';
import { AccountService } from 'src/account/service/account/account.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private accountService: AccountService
    ) {}

    @Post()
    async auth(@Body() data: AuthDto):Promise<AuthToken> {
        let account = await this.accountService.validateAuth(data.username, data.password);
        if (account == null) {
            throw new HttpException("Username, Password invalid!", HttpStatus.NOT_ACCEPTABLE);
        }

        return await this.authService.auth(account.id);
    }
}
