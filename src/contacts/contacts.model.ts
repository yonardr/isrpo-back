import { Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface ContactCreationAttrs {
    name : string
    address : string
    tel: string
    email : string
}
@Table({tableName: 'contacts'})
export class Contacts extends Model<Contacts, ContactCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id : number

    @ApiProperty({example: 'Иван', description: 'Имя контакта'})
    @Column({type: DataType.STRING, allowNull:false})
    name : string

    @ApiProperty({example: 'г.Казань, ул.Большая красная 55', description: 'Адрес контакта'})
    @Column({type: DataType.STRING, allowNull:true})
    address : string

    @ApiProperty({example: '89625587796', description: 'Номер телефона контакта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    tel : string

    @ApiProperty({example: 'rustem2129@mail.ru', description: 'Электронная почта контакта'})
    @Column({type: DataType.STRING, allowNull:true})
    email : string

}