import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 20, unique: true })
    username: string;

    @Column('varchar', { length: 200 })
    password: string;
}
