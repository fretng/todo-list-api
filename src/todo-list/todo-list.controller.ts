import { Controller, Post, Body, Get, Put, Param, Delete, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { TodoListService } from './service/todo-list/todo-list.service';
import { TodoList as TodoListEntity } from './entity/todo-list.entity';
import { AddTodoDto, CheckTodoDto } from './todo-list.dto';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Request } from 'express';
import { UserTokenInterceptor } from './interceptor/user-token.interceptor';

@Controller('todo-list')
@UseGuards(AuthGuard)
@UseInterceptors(UserTokenInterceptor)
export class TodoListController {
    constructor(private todoListService: TodoListService) {}

    @Post()
    async addTodo(@Body() todo: AddTodoDto ): Promise<TodoListEntity> {
        let todoEntity = new TodoListEntity();
        todoEntity.message = todo.message;
        todoEntity.userId = todo.userId;
        return await this.todoListService.addTodo(todoEntity);
    }

    @Get()
    async getAll(@Req() data: Request): Promise<TodoListEntity[]> {
        let userId = data.body.userId;
        return await this.todoListService.getAll(userId);
    }

    @Put(':id')
    async checkTodo(
        @Param('id') id: number,
        @Body() data: CheckTodoDto
    ): Promise<TodoListEntity> {
        let todo = await this.todoListService.getOne(id);
        todo.isDone = data.isDone;
        todo.userId = data.userId;
        return await this.todoListService.update(todo);
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: number): Promise<DeleteResult> {
        return await this.todoListService.delete(id);
    }
}
