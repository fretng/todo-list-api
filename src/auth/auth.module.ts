import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthToken } from './entity/auth.entity';

@Module({
    providers: [AuthService],
    imports: [TypeOrmModule.forFeature([AuthToken])],
})
export class AuthModule {}
