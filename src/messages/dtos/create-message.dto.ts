import { IsString } from "class-validator";

//DTO stands for Data Transfer Object
export class CreateMessageDto {
    @IsString()
    content: string;
}