import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/interface/user.interface';

@Injectable()
export class BankService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getamount(id:string){
        
        const user = await this.userModel.findOne({id:id})

        return `your amount is N${user.amount}`
    }
}
