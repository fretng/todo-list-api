import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { TodoListService } from './service/todo-list/todo-list.service';
import { TodoList as TodoListEntity } from './entity/todo-list.entity';
import { AddTodoDto, CheckTodoDto } from './todo-list.dto';
import { DeleteResult } from 'typeorm';

@Controller('todo-list')
export class TodoListController {
    constructor(private todoListService: TodoListService) {}

    @Post()
    async addTodo(@Body() todo: AddTodoDto ): Promise<TodoListEntity> {
        let todoEntity = new TodoListEntity();
        todoEntity.message = todo.message;
        return await this.todoListService.addTodo(todoEntity);
    }

    @Get()
    async getAll(): Promise<TodoListEntity[]> {
        return await this.todoListService.getAll();
    }

    @Put(':id')
    async checkTodo(
        @Param('id') id: number,
        @Body() data: CheckTodoDto
    ): Promise<TodoListEntity> {
        let todo = await this.todoListService.getOne(id);
        todo.isDone = data.isDone;
        return await this.todoListService.update(todo);
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: number): Promise<DeleteResult> {
        return await this.todoListService.delete(id);
    }
}
