import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cake } from 'src/typeorm/entities/cake';
import { Order } from 'src/typeorm/entities/order';
import { Repository } from 'typeorm';
import { orderDTO } from './order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private orderRepository : Repository<Order> , 
                @InjectRepository(cake) private cakeRepository : Repository<cake>){}

    async createOrder(details : orderDTO){
        const newCake = await this.cakeRepository.findOneBy({id : details.cakeId})
        console.log(newCake)
        if(!newCake){throw new HttpException('The cake was not found!' , HttpStatus.BAD_REQUEST);}

        const newOrder = this.orderRepository.create(
            {
             cakeId : details.cakeId ,
             amount : details.amount ,
             phone : details.phone,
             pickUpDate : details.pickUpDate,
            })

        return this.orderRepository.save(newOrder)

    }

    getOrders(){
        return this.orderRepository.find()
    }
}
