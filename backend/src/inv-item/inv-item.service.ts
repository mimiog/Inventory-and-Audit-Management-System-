/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult,DeleteResult} from 'typeorm';
import { CreateInvItemDto } from 'src/dto/create-invitem.dto';
import { UpdateInvItemDto } from 'src/dto/update-invitem.dto';
import { invItem } from 'src/entities/invItem.entity'; 
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class InvItemService {
    constructor (
        @InjectRepository(invItem)
        private invItemRepository: Repository<invItem>
    ) { }
    async create(createInvItemDto: CreateInvItemDto): Promise<void> {
        const invEntity = await this.invItemRepository.create(createInvItemDto);
        await this.invItemRepository.save(invEntity);
    }
    async  readAll(): Promise<invItem[]> {
        return await this.invItemRepository.find(); //Select * from invItem
    }

    async readOneById(id:string): Promise<invItem> {  //Select * from invItem where id = id passed in param
        try {
          const item = await this.invItemRepository.findOneOrFail(id); 
          return item; 
        } catch (error) {
         throw error;   
        }
    }
    async updateInvItem(id:string, updateInvItemDto:UpdateInvItemDto): Promise<void> {
        const item = await this.readOneById(id);
        
        if(!item) {
            throw new NotFoundException('Item with id number ${id}, does not exist.');
        }

        await this.invItemRepository.update(id, updateInvItemDto);
    };
    
    async delete(id:string): Promise<invItem>{
        const itemToDelete = await this.readOneById(id);
        return this.invItemRepository.remove(itemToDelete);
    }
}
