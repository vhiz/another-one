import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth/schema/user.schema';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports:[MongooseModule.forFeature([{
    name:'User',
    schema: UserSchema
  }])]
})
export class UserModule {}
