import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    
    @IsString()
    @IsNotEmpty()
    readonly password: string;
    
    
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    
    readonly amount: string;

    @IsNotEmpty()
    readonly phoneno: string
}

