/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { invItem } from './entities/invItem.entity';
import { InvItemService } from './inv-item/inv-item.service';
import { InvItemController } from './inv-item/inv-item.controller';
import { InvItemModule } from './inv-item/inv-item.module';



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
   TypeOrmModule.forFeature([invItem]),
   InvItemModule,
  ],
  controllers: [InvItemController],
  providers: [InvItemService],
})
export class AppModule {}
