import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    @IsNotEmpty()
    public recipient: string;

    @IsString()
    @IsNotEmpty()
    public username: string;

    @IsString()
    @IsNotEmpty()
    public title: string;

    @IsString()
    @IsNotEmpty()
    public message: string;
}
