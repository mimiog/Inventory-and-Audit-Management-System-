/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { invItem } from './entities/invItem.entity';
import { InvItemService } from './inv-item/inv-item.service';
import { InvItemController } from './inv-item/inv-item.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'cosc412.cokwmyosnzts.us-east-1.rds.amazonaws.com',
      database:'inventoryDB',
      username:'postgres',
      password:'Password1234',
      //entities:[invItem],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }
    ),
   TypeOrmModule.forFeature([invItem]),
  ],
  controllers: [AppController, InvItemController],
  providers: [AppService, InvItemService],
})
export class AppModule {}
