import { Body, Controller, Get, Param, Post,Res } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { User } from './interface/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}



    @Post('register')
    create(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.authService.create(createUserDto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Res({passthrough: true}) response: Response,@Body() loginDto: LoginUserDto ): Promise<string>{
        return this.authService.login(loginDto)
    }

  
}
