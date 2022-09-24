import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../interface/user.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(@InjectModel('User') private readonly userModule: Model<User>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.TOKEN,
        })
    }

    async validate(data: {sub: string, email:string}){
        
        const userid = data.sub
        const user = await this.userModule.findById(userid)
        delete user.password
        return user
    }
}