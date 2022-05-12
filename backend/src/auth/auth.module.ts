/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserModule } from '../user/user.module';
import { RolesGuard } from './guards/roles.guard';

@Module({
    imports: [
        PassportModule,
        UserModule
    ],
    providers: [
        JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        }
    ],
    exports: []
})
export class AuthModule {}
