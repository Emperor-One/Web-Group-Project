import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messageDTO } from 'src/messages/controllers/message/message.dto';
import { cake } from 'src/typeorm/entities/cake';
import { Repository } from 'typeorm';
import { cakeDTO } from './cake.dto';
import { changeCakeDTO } from './changeCake.dto';

@Injectable()
export class CakeService {

    constructor(@InjectRepository(cake) private cakeRepository : Repository<cake>){}
    

    getCakes(){
        return this.cakeRepository.find()
    }

    createCake(request : cakeDTO){
        const newCake = this.cakeRepository.create({
            price : request.price,
            description : request.description
        })

        return this.cakeRepository.save(newCake);
    }

    changePrice(id : number , request : changeCakeDTO){
        return this.cakeRepository.update({id} , {...request} )
    }

    addImageURL(id : number , url : string){
        return this.cakeRepository.update({id} , {image : url})
    }

}
 