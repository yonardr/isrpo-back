import {ApiProperty} from "@nestjs/swagger";

export class CreateContactDto{
    @ApiProperty({example: 'Иван', description: 'Почтовый адерс'})
    readonly name : string

    @ApiProperty({example: 'г.Казань, ул.Большая красная 55', description: 'Адрес контакта'})
    readonly address : string

    @ApiProperty({example: '89625587786', description: 'Номер телефона контакта'})
    readonly tel: string

    @ApiProperty({example: 'rustem2129@mail.ru', description: 'Электронная почта контакта'})
    readonly email : string
}