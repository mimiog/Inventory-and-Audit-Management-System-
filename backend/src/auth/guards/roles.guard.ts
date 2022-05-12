/* eslint-disable prettier/prettier */
import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../../entities/user.entity';
import { UserService } from '../../user/user.service';
import { ROLES_KEY, UserRole } from '../roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService
  ) {}

  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get roles from decorator
    const requiredRoles: UserRole[] = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if(requiredRoles) {
      // validate JWT payload fields
      const { user } = context.switchToHttp().getRequest();
      if (!user.userId) {
        throw new BadRequestException(`Malformed JWT, userId should exist in the JWT payload.`);
      }
      if (!user.username) {
        throw new BadRequestException(`Malformed JWT, username should exist in the JWT payload.`);
      }

      // Gets user from database
      const user_entity: Partial<User> = await this.userService.findUserRole(user.userId);
      if(!user_entity) {
        throw new NotFoundException(`Not Found, the user with the username ${user.username}, does not exist.`);
      }

      // Throws excpetion if not some of roles exist on user
      if(!requiredRoles.includes(user_entity.role as UserRole)) {
        throw new ForbiddenException(`Forbidden, the user with the username ${user.username} does not have role(s) ${requiredRoles.join(', ')}`);
      }
    }

    return true; // if all checks pass continues to controller function
  }
}
