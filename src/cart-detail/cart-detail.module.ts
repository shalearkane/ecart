import { Module } from '@nestjs/common';
import { CartDetailController } from './cart-detail.controller';
import { CartDetailService } from './cart-detail.service';
import { CartItem as CartItem } from './cart-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem ]),
],
  controllers: [CartDetailController],
  providers: [CartDetailService]
})
export class CartDetailModule {}
