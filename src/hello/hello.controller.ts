import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { HelloRegisterDto } from './hello.dto';
import { ProfileService } from './service/profile/profile.service';

@Controller('hello')
export class HelloController {
    constructor(private profileService: ProfileService) {

    }

    @Get()
    hello(): any {
        return { msg: 'Hello, World!' };
    }

    @Post()
    sendBody(@Body() data: any): any {
        console.log(data);
        return data;
    }

    @Post('register')
    register(@Body() data: HelloRegisterDto): HelloRegisterDto {
        console.log(data);
        return data;
    }

    @Post(':id')
    sendParams(@Param('id') id: number): number {
        return id;
    }

    @Get('msg')
    header(@Req() req: Request): any {
        return req.headers;
    }

    @Get('profile/all')
    getAllProfile(): any {
        return this.profileService.getAll();
    }

    @Get('profile/:id')
    getProfile(@Param('id') id: number): any {
        return this.profileService.getOne(id);
    }

}
