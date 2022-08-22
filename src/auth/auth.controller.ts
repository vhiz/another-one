import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}



    @Post('register')
    create(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.authService.create(createUserDto)
    }

    @Post('login')
    login(@Body() loginDto: CreateUserDto): Promise<string>{
        return this.authService.login(loginDto)
    }

  
}
