import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { admin } from './typeorm/entities/admin';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { CakesModule } from './cakes/cakes.module';
import { MessagesModule } from './messages/messages.module';
import { message } from './typeorm/entities/message';
import { cake } from './typeorm/entities/cake';
import { Order } from './typeorm/entities/order';
import { OrdersModule } from './orders/orders.module';



@Module({
  imports: [ 
            TypeOrmModule.forRoot({ 
              type : "sqlite", 
              database : "firstDataBase.db",
              entities : [admin , cake , message , Order],
              synchronize: true
            }), AdminModule, CakesModule, MessagesModule, OrdersModule, 
          ],
  controllers: [AppController], // controller file reference
  providers: [], //service files or services.ts file reference
})
export class AppModule {}
