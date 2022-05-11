import { User } from "../entities/user.entity";

export interface IUserService {
    findUserRole(id: string, username: string): Promise<Partial<User>>;
}