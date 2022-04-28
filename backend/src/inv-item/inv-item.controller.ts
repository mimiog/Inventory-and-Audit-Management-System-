/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InvItemService } from './inv-item.service';
import { invItem } from 'src/entities/invItem.entity';
import { CreateInvItemDto } from 'src/dto/create-invitem.dto';
import { UpdateInvItemDto } from 'src/dto/update-invitem.dto';
@Controller('inv-item')
export class InvItemController {
    constructor(private invItemService: InvItemService){

    }
   
   
    @Post('create')
    async create(@Body() createInventoryItem:CreateInvItemDto): Promise<any> {
      return this.invItemService.create(createInventoryItem);
    }
    
    
    @Get()
    read(): Promise<invItem[]> {
        return this.invItemService.readAll();
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() createInventoryItem:CreateInvItemDto): Promise<any> {
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.invItemService.delete(id);
    }
}
