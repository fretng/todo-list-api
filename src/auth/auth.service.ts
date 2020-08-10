import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthToken } from './entity/auth.entity';
import { Repository } from 'typeorm';
import bcrypt = require("bcrypt");

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthToken) private authRepo: Repository<AuthToken>) {}

    async auth(userId: number): Promise<AuthToken> {
        let token = this.genToken();
        let authToken = new AuthToken();
        authToken.token = token;
        authToken.userId = userId;
        return this.authRepo.save(authToken);
    }

    private genToken(): string {
        let salt = bcrypt.genSaltSync(11, 'b');
        return bcrypt.hashSync(new Date().toISOString(), salt);
    }

    async isTokenValid(token: string): Promise<boolean> {
        let authToken = await this.authRepo.findOne({ token: token });
        return authToken != null;
    }

    async getUserIdByToken(token: string): Promise<number> {
        let authToken = await this.authRepo.findOne({ token: token });
        if (authToken) {
            return authToken.userId;
        }
        return null;
    }
}
