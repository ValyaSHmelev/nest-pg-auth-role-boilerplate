import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'user@example.com', description: 'Почтовый адрес' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'Пароль' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 16, { message: 'От 4 до 16 символов' })
    readonly password: string;
}