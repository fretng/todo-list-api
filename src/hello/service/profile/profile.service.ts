import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
    private data = [
        {
            firstname: "aaa",
            lastname: "bbb",
            age: 23,
        },
        {
            firstname: "hello",
            lastname: "world",
            age: 55,
        },
    ];

    getAll(): any {
        return this.data;
    }

    getOne(index: number): any {
        return this.data[index];
    }
}
