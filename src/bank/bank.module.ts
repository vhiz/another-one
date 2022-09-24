import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth/schema/user.schema';

@Module({
  providers: [BankService],
  controllers: [BankController],
  imports:[MongooseModule.forFeature([{
    name: 'User',
    schema: UserSchema
  }])]
})
export class BankModule {}
