import { IsNotEmpty } from "class-validator";

export class changeCakeDTO{
    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    description : string;
}