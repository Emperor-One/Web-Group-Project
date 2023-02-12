import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cake } from 'src/typeorm/entities/cake';
import { Order } from 'src/typeorm/entities/order';
import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './services/order/order.service';

@Module({
  imports : [TypeOrmModule.forFeature([Order , cake ])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrdersModule {}
