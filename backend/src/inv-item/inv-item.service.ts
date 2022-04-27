/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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
        return await this.invItemRepository.find();
    }
    async update(createInvItemDto: CreateInvItemDto): Promise<void> {
    }
    async delete(id): Promise<DeleteResult> {
        return await this.invItemRepository.delete(id);
    }
}
