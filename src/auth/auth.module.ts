import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthToken } from './entity/auth.entity';
import { AuthController } from './auth.controller';
import { AccountModule } from 'src/account/account.module';

@Module({
    providers: [AuthService],
    imports: [TypeOrmModule.forFeature([AuthToken]), AccountModule],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
