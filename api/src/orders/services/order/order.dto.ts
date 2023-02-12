import { IsNotEmpty } from "class-validator";


export class orderDTO{

    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    pickUpDate : string;

    @IsNotEmpty()
    cakeId : number;

    @IsNotEmpty()
    amount : number;
}