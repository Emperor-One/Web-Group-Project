import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { admin } from 'src/typeorm/entities/admin';
import { AdminController } from './controllers/admin/admin.controller';
import { AdminService } from './services/admin/admin.service';




@Module({
  imports : [TypeOrmModule.forFeature([admin])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
