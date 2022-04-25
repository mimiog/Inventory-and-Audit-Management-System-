/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult,DeleteResult} from 'typeorm';
import { invItem } from 'src/entities/invItem.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class InvItemService {
    constructor (
        @InjectRepository(invItem)
        private invItemRepository: Repository<invItem>
    ) { }
    async create(contact: invItem): Promise<invItem> {
        return await this.invItemRepository.save(contact);
    }
    async  readAll(): Promise<invItem[]> {
        return await this.invItemRepository.find();
    }
    async update(contact: invItem): Promise<UpdateResult> {

        return await this.invItemRepository.update(contact.id,contact);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.invItemRepository.delete(id);
    }
}
