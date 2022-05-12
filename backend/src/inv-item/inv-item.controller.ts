/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, Query, Patch, HttpCode } from '@nestjs/common';
import { InvItemService } from './inv-item.service';
import { invItem } from 'src/entities/invItem.entity';
import { CreateInvItemDto } from 'src/dto/create-invitem.dto';
import { UpdateInvItemDto } from 'src/dto/update-invitem.dto';
import { Roles, UserRole } from '../auth/roles.decorator';

@Controller('inv-item')
export class InvItemController {
    constructor(private invItemService: InvItemService){
      
    }

    @Post('create')
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR, UserRole.CLERK)
    @HttpCode(201)
    async create(@Body() createInventoryItem:CreateInvItemDto): Promise<void> {
      return this.invItemService.create(createInventoryItem);
    }
    
    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR, UserRole.CLERK)
    @HttpCode(200)
    readone(id: string):  Promise<invItem>{
      return this.invItemService.readOneById(id);
    }
    
    @Get()
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR, UserRole.CLERK)
    @HttpCode(200)
    read(): Promise<invItem[]> {
        return this.invItemService.readAll();
    }

    @Patch(':id/update')
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR)
    @HttpCode(204)
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR, UserRole.CLERK)
    async update(@Param('id') id:string, @Body() updateInvItemDTO:UpdateInvItemDto): Promise<void> {
      await this.invItemService.updateInvItem(id, updateInvItemDTO);
    }  
    
    @Delete(':id/delete')
    @Roles(UserRole.ADMIN, UserRole.DIRECTOR)
    @HttpCode(204)
    async delete(@Param('id') id: string) {
      return this.invItemService.delete(id);
    }
}


