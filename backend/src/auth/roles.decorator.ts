/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';

export enum UserRole {
    ADMIN = "admin",
    DIRECTOR = "director"
}
 // change enum to your groups -- chris
export const ROLES_KEY = 'roles';

export const Roles = (...args: UserRole[]) => SetMetadata(ROLES_KEY, args);
