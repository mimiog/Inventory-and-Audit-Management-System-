<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsDefined, IsString, IsNotEmpty, Length, IsNumber, isDefined, IsDate } from "class-validator";

export class CreateInvItemDto{

    
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Length(0,45)
    name: string

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    payment_id:number

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    amount:number

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    department:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    location:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    description:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    category:string

    @IsDefined()
    @IsDate()
    @IsNotEmpty()
    purchase_date:Date
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    unit_price:number

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    memo:string
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    lifespan:number

=======
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsDefined, IsString, IsNotEmpty, Length, IsNumber, isDefined, IsDate } from "class-validator";

export class CreateInvItemDto{

    
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Length(0,45)
    name: string

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    payment_id:number

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    amount:number

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    department:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    location:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    description:string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    category:string

    @IsDefined()
    @IsDate()
    @IsNotEmpty()
    purchase_date:Date
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    unit_price:number

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    auditable: string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    memo:string
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    lifespan:number

>>>>>>> 06c8f46499370c4e27548b5499544f1ce450c04d
}