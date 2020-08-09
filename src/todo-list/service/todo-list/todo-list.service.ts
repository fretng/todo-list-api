import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoList } from '../../entity/todo-list.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class TodoListService {
    constructor(@InjectRepository(TodoList) private todoRepo: Repository<TodoList>) {}

    async addTodo(todo: TodoList): Promise<TodoList> {
        return await this.todoRepo.save(todo);
    }

    async getAll(): Promise<TodoList[]> {
        return await this.todoRepo.find();
    }

    async getOne(id: number): Promise<TodoList> {
        return await this.todoRepo.findOne({ id: id });
    }

    async update(todo: TodoList): Promise<TodoList> {
        return await this.todoRepo.save(todo);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.todoRepo.delete({ id: id });
    }
}
