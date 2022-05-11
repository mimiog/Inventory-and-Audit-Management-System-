import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { invItem } from 'src/entities/invItem.entity';
import { InvItemController } from './inv-item.controller';
import { InvItemService } from './inv-item.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([invItem]),
    ],
    controllers: [InvItemController],
    providers: [InvItemService]
  })
export class InvItemModule {}
