import { Injectable } from '@nestjs/common';
import {Contacts} from "./contacts.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateContactDto} from "./dto/create-contact.dto";

@Injectable()
export class ContactsService {
    constructor(@InjectModel(Contacts) private contactsRepository: typeof Contacts) {}

    async getAll(){
        const contacts = await this.contactsRepository.findAll({include: {all: true}})
        return contacts
    }

    async create(dto: CreateContactDto){
        const res = await this.contactsRepository.create(dto)
        return res;
    }

    async getById(id: number){
        const item = await this.contactsRepository.findOne({where: {id: id}})
        return item;
    }

    async delete(id: number){
        const res = await this.contactsRepository.destroy({where:{id: id}})
        return res
    }

    async edit(id: number, dto: CreateContactDto){
        const res = await this.contactsRepository.update({
            name: dto.name,
            email: dto.email,
            tel: dto.tel,
            address: dto.address
        }, {where: {id: id}})
    }
}
