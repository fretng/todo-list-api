import { Injectable } from '@nestjs/common';
import { Account } from '../../entity/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt = require("bcrypt");

@Injectable()
export class AccountService {
    constructor(@InjectRepository(Account) private accountRepo: Repository<Account>) {}

    async register(account: Account): Promise<Account> {
        try {
            return await this.accountRepo.save(account);
        } catch (e) {
            return null;
        }
    }

    async validateAuth(username: string, password: string): Promise<Account> {
        let account = await this.accountRepo.findOne({ username: username });
        if (account == null) {
            return null;
        }
        if (this.isPasswordMatch(account.password, password)) {
            return account;
        }
        return null;
    }

    private isPasswordMatch(encryptedPassword: string, strPassword: string): boolean {
        let rs =  bcrypt.compareSync(strPassword, encryptedPassword);
        return rs;
    }
}
