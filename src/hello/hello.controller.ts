import { Controller, Get, Post, Body, Param, Req, HttpException, HttpStatus, UseGuards, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { HelloRegisterDto } from './hello.dto';
import { ProfileService } from './service/profile/profile.service';
import { ProfileGuard } from './guard/profile.guard';
import { TimeInterceptor } from './interceptor/time.interceptor';

@Controller('hello')
@UseInterceptors(TimeInterceptor)
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
    @UseGuards(ProfileGuard)
    getProfile(@Param('id') id: number): any {
        let profile = this.profileService.getOne(id);
        if (profile == null) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
        return profile;
    }

}
