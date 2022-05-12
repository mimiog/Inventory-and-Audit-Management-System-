/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { IUserService } from './interfaces/iuser.service';

@Injectable()
export class UserService implements IUserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

    async findUserRole(id: string): Promise<Partial<User>> {
        /**
         * 
         * SELECT id, role
         * FROM 'user'
         * WHERE 
         *  user.username = {username}
         *  user.id = {id}
         * 
         */
        return await this.userRepo.findOne({
            select: ["id", "role"],
            where: {
                id: id
            }
        });
    }

}
