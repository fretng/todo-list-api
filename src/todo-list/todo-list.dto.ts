export interface AddTodoDto {
    message: string;
    userId: number;
}

export interface CheckTodoDto {
    isDone: boolean;
    userId: number;
}
