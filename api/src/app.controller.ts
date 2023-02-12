import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
    @Post('sendMessage')
    firstGet(){
        return {"message" : 'successful'}
    }

    @Post('order')
    orderCake(){
        return {
            'successfull' : true
        }
    }
}
