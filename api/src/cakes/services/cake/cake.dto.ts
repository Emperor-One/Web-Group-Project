import { IsNotEmpty } from "class-validator";

export class cakeDTO {
    @IsNotEmpty()
    price : number;

    @IsNotEmpty()
    description : string;


}