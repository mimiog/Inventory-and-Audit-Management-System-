import { SetMetadata } from '@nestjs/common';

export enum UserRole {
    ADMIN = "admin",
    DIRECTOR = "director",
    CLERK="clerk",
    AUDITOR="auditor"
}
export const ROLES_KEY = 'roles';

export const Roles = (...args: UserRole[]) => SetMetadata(ROLES_KEY, args);
