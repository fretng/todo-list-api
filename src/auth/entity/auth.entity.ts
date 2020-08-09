import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuthToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 200 })
    token: string;

    @Column()
    userId: number;
}
