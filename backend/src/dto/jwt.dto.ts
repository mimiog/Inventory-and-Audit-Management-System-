import { IsDefined, IsNotEmpty, IsString } from "class-validator"

export class JWTDto {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    sub: string

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    username: string

}
