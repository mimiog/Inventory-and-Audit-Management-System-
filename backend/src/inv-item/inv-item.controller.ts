/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InvItemService } from './inv-item.service';
import { invItem } from 'src/entities/invItem.entity';
@Controller('inv-item')
export class InvItemController {
    constructor(private invItemService: InvItemService){

    }

    @Get()
    read(): Promise<invItem[]> {
        return this.invItemService.readAll();
    }
    @Post('create')
    async create(@Body() contact: invItem): Promise<any> {
      return this.invItemService.create(contact);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() contact: invItem): Promise<any> {
        contact.id = Number(id);
        return this.invItemService.update(contact);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.invItemService.delete(id);
    }
}
