import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post,Req,UsePipes, ValidationPipe } from '@nestjs/common';
import { Query, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { FileInterceptor } from '@nestjs/platform-express';
import { request } from 'http';
import { diskStorage } from 'multer';
import path = require('path');
import { Observable, of} from 'rxjs';
import { cakeDTO } from 'src/cakes/services/cake/cake.dto';
import { CakeService } from 'src/cakes/services/cake/cake.service';
import { changeCakeDTO } from 'src/cakes/services/cake/changeCake.dto';
import { v4 as uuidv4} from 'uuid';




@Controller('cakes')
export class CakeController {
    
    constructor(private cakeService : CakeService){}

    @Get()
    getAllCakes(){
        return this.cakeService.getCakes()
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    makeCake(@Body() request : cakeDTO){
        return this.cakeService.createCake(request)
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file' , {
        storage: diskStorage({
            destination: './cakePictures',
            filename : (req , file , cb ) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g , '') + uuidv4()
                const extension: string = path.parse(file.originalname).ext;

                cb(null , `${filename}${extension}`)
            }
        })
    }))
    uploadImage(@UploadedFile() file , @Query('id' , ParseIntPipe) id : number ): Observable<Object>{
        const createdPath  =  of ({imagePath : file.path })
        try {
            const pat = {pat : file.path}
            this.cakeService.addImageURL(id , pat["pat"])
            return createdPath
            
        }
        catch (error) {
            console.log(error.message)
        }
   
    }

    @Patch(':id/update')
    updatePrice(@Param('id' , ParseIntPipe) id : number , @Body() request : changeCakeDTO){
        return this.cakeService.changePrice(id , request)
    }


}
