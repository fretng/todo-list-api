import { Injectable } from '@nestjs/common';
import { Account } from '../../entity/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
