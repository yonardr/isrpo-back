import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ContactsService} from "./contacts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Contacts} from "./contacts.model";
import {CreateContactDto} from "./dto/create-contact.dto";

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService : ContactsService) {}

    @ApiOperation({summary: 'Создание контакта'})
    @ApiResponse({status: 200, type : Contacts})
    @Post()
    create(@Body() dto: CreateContactDto){
        return this.contactsService.create(dto)
    }

    @ApiOperation({summary: 'Получение всех контактов'})
    @ApiResponse({status: 200, type : Contacts})
    @Get()
    getAll(){
        return this.contactsService.getAll()
    }

    @ApiOperation({summary: 'Получение контакта по id'})
    @Get('/id/:value')
    getById(@Param('value') id: number){
        return this.contactsService.getById(id)
    }

    @ApiOperation({summary: 'Редактирование контакта'})
    @Put('/id/:value')
    edit(@Body() dto: CreateContactDto,
         @Param('value') id: number){
        return this.contactsService.edit(id, dto)
    }

    @ApiOperation({summary: 'Удаление контакта'})
    @Delete('/id/:value')
    delete(@Param('value') id: number){
        return this.contactsService.delete(id)
    }
}
