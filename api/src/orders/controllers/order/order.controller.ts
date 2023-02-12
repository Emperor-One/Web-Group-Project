import { Body, Controller, Get, Post } from '@nestjs/common';
import { orderDTO } from 'src/orders/services/order/order.dto';
import { OrderService } from 'src/orders/services/order/order.service';

@Controller('orders')
export class OrderController {
    constructor(private orderService : OrderService){}

    @Get()
    getOrders(){
        return this.orderService.getOrders()
    }

    @Post('create')
    createOrder(@Body() request : orderDTO){
        return this.orderService.createOrder(request)
    }

    
}
