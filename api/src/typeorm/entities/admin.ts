import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'admin'} )
export class admin{

    @PrimaryColumn()
    userName : string;

    @Column()
    password : string;
}