import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { admin } from 'src/typeorm/entities/admin';
import {Observable , from , of} from 'rxjs';
import { Repository } from 'typeorm';


@Injectable()
export class AdminService {

    constructor(@InjectRepository(admin) private adminRepository : Repository<admin>){}

    fetchUser(){
        return this.adminRepository.find();
    }

    findOne(username: string)  {
        return this.adminRepository.findOne({where : {userName : username} })
    }

    login( admin : admin){
        return
    }


         
}
