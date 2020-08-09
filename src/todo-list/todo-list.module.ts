import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './service/todo-list/todo-list.service';
import { TodoList } from './entity/todo-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [TodoListController],
    providers: [TodoListService],
    imports: [TypeOrmModule.forFeature([TodoList])],
})
export class TodoListModule {}
