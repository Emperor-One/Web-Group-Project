import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'message'})
export class message{
    
    @PrimaryGeneratedColumn('increment')
    id : number

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column({default : 0})
    opened : number = 0;

    @Column()
    message : string;

}