import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Account } from './entity/account.entity';
import { RegisterDto } from './account.dto';
import { AccountService } from './service/account/account.service';
import bcrypt = require("bcrypt");

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Post()
    async register(@Body() data: RegisterDto): Promise<Account> {
        let account = new Account();
        account.username = data.username;
        account.password = this.encryptPassword(data.password);

        let createdAccount = await this.accountService.register(account);
        if (createdAccount == null) {
            throw new HttpException("Username exists", HttpStatus.BAD_REQUEST);
        }
        delete createdAccount.password;
        return createdAccount;
    }

    private encryptPassword(pass: string): string {
        let salt = bcrypt.genSaltSync(11, 'b');
        return bcrypt.hashSync(pass, salt);
    }

}
