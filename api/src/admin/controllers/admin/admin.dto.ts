import { IsNotEmpty } from "class-validator";

export class adminDTO {
    @IsNotEmpty()
    userName : string

    @IsNotEmpty()
    password : string
}