import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cake } from 'src/typeorm/entities/cake';
import { CakeController } from './controllers/cake/cake.controller';
import { CakeService } from './services/cake/cake.service';

@Module({
  imports : [TypeOrmModule.forFeature([cake])],
  controllers: [CakeController],
  providers: [CakeService]
})
export class CakesModule {}
