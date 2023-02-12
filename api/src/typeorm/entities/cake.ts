import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";

@Entity({name : 'cake'})
export class cake{

    @PrimaryGeneratedColumn('increment') 
    id : number

    @Column('real')
    price : number

    @Column('text')
    description : string

    @Column('text')
    image : string = 'cakePictures\\default.jpg'
    
}