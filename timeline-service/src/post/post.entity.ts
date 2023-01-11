import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    service_id: number;

    @Column()
    id: number;

    @Column()
    content: string;

    @Column()
    userId: number;

    @Column({default: 0})
    likes: number;
}