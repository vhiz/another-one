import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModule: Model<User>, private jwt: JwtService){}

  
    async create(user:User): Promise<User>{

        const exist = await this.userModule.findOne({email:user.email})
        if(exist) {
            throw new ForbiddenException('user already exist')
        }

        const existname = await this.userModule.findOne({name:user.name})
        if(existname) throw new ForbiddenException('name alreadys exist')

        const hashed = await argon.hash(user.password)
        const newUser = new this.userModule({
            email: user.email,
            password: hashed,
            name: user.name,
            amount: 30000
        })
        return await newUser.save()
    }



   async login(login:User):Promise<any>{
    const user = await this.userModule.findOne({email:login.email})
    
    if(!user) throw new ForbiddenException('user not found')

    const verified = await argon.verify(user.password, login.password)
    if(!verified) throw new ForbiddenException('password incorrect')

    return this.signToken(user.id, user.email)
   }

   public async signToken(
    userId: string,
    email: string
   ): Promise<string>{
    const data ={
        sub:userId,
        email
    }

    return this.jwt.signAsync(data,{expiresIn:"15m",secret:process.env.TOKEN})
   }
}
