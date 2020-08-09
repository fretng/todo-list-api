import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListModule } from './todo-list/todo-list.module';
import { AccountModule } from './account/account.module';

@Module({
    imports: [HelloModule, TypeOrmModule.forRoot(), TodoListModule, AccountModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
