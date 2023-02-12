import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from 'src/admin/services/admin/admin.service';
import { adminDTO } from './admin.dto';
import * as bcrypt from 'bcrypt'


@Controller('admin')
export class AdminController {
    
    constructor(private adminService : AdminService){}

    @Get()
    getAdmin(){
        return this.adminService.fetchUser();
    }

    @Post('login')
    async adminLogin(@Body() request : adminDTO ){
       const admin = await  this.adminService.findOne(request.userName)
       if (admin){
        if (admin.password == request.password){
            return 'correct'
        }
            return 'incorrect'
       }

       return 'unauthenticated'
    }
}
