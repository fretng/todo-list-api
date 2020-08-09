import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TodoList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 200 })
    message: string;

    @Column({ default: false })
    isDone: boolean;
}
