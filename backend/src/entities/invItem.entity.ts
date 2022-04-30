/* eslint-disable prettier/prettier */
<<<<<<< HEAD
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
>>>>>>> origin/Mimi
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class invItem {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    payment_id:number;

    @Column()
    amount:number;

    @Column()
    department: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    purchase_date: Date;

    @Column()
    unit_price: number;

    @Column()
    memo: string;

    @Column()
<<<<<<< HEAD
    lifespan: Number;
=======
    lifespan: number;
>>>>>>> origin/Mimi
}