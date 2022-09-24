import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/interface/user.interface';
import { EditUser } from './dto/edit.user.dto';
import * as argon from 'argon2'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async edituser(userId: string, dto: EditUser){

        if(dto.password){
            try {
                dto.password = await argon.hash(dto.password)
            } catch (error) {
                throw new ForbiddenException(error)
            }
        }

        const user = await this.userModel.findOneAndUpdate({id: userId},{
            $set: dto
        })

        return user
    }

    async edituserbyparam(id: string){
        const user= await this.userModel.findOne({id: id})
        if(!user) throw new ForbiddenException ('no user found')

        return user
    }

    async deleteuser(id:string){
        try {     
            const user = await this.userModel.findOneAndDelete({id:id})
            if(!user) throw new ForbiddenException('no user')
        } catch (error) {
            throw new ForbiddenException(error)
        }
        return 'deleted'
    }
}
