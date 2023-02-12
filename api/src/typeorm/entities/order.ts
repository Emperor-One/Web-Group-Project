import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { cake } from "./cake";

@Entity({name : 'order'})
export class Order{
    @PrimaryGeneratedColumn('increment')
    id : number;
    
    @Column()
    phone : string;

    @Column()
    pickUpDate : string;

    @Column()
    cakeId : number;

    @Column()
    amount : number = 1;

}