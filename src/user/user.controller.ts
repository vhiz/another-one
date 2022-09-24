import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserDecorator } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { User } from 'src/auth/interface/user.interface';
import { EditUser } from './dto/edit.user.dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {

    constructor (private readonly userService: UserService){}

    @Get('me')
    getme(@UserDecorator() user:User){
        return user
    }


    @Put('edit')
    editUser(@Body() dto: EditUser, @UserDecorator('id') userId: string){
        return this.userService.edituser(userId, dto)
    }

    @Get(':id')
    edit(@Param('id') id: string){
        return this.userService.edituserbyparam(id)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.userService.deleteuser(id)
    }
}
