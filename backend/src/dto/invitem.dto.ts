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
    payment_id:Number

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    amount:Number

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    department:String

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    location:String

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    description:String

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    category:String

    @IsDefined()
    @IsDate()
    @IsNotEmpty()
    purchase_date:Date
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    unit_price:Number

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    memo:String
    
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    lifespan:Number
    







    


}