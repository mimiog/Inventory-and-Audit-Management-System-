/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvItemModule } from './inv-item/inv-item.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'cosc412.cokwmyosnzts.us-east-1.rds.amazonaws.com',
      database:'inventoryDB',
      username:'postgres',
      password:'Password1234',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }
    ),
   InvItemModule,
   AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
