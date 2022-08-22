import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    
    readonly name: string;
    
    
    @IsString()
    @IsNotEmpty()
    readonly password: string;
    
    
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;
}

