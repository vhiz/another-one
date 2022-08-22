import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({isGlobal:true}), MongooseModule.forRoot(process.env.CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true, })],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}