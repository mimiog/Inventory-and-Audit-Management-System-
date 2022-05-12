/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ 
        type: "varchar", 
        length: 45, 
        unique: true, 
        nullable: false 
    })
    username: string;

    @Column({
        type: "text",
        nullable: false
    })
    password: string;

    @Column({
        type: "varchar",
        length: 45,
        nullable: true
    })
    role: string;

}
