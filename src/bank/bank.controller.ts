import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserDecorator } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { User } from 'src/auth/interface/user.interface';
import { BankService } from './bank.service';

@UseGuards(JwtGuard)
@Controller('bank')
export class BankController {
    constructor(private readonly bankService: BankService){}

    @Get('amount')
    async getamount(@UserDecorator('id') userId:string){
        return this.bankService.getamount(userId)
    }


    transfer(){}

    withdrawl(){}

    deposit(){}
}
