import { IsEmail, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class EditUser{
    @IsString()
    @IsOptional()
    name: string;
    
    
    @IsString()
    @IsOptional()
    password: string;
    
    
    @IsEmail()
    @IsOptional()
    email : string;
}