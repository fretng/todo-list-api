import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './service/account/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';

@Module({
    controllers: [AccountController],
    providers: [AccountService],
    imports: [TypeOrmModule.forFeature([Account])],
    exports: [AccountService],
})
export class AccountModule {}
