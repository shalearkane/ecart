import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartDetailService } from './cart-detail.service';
import { CartItem } from './cart-detail.entity';
import { CartItemDto } from './cart-detail.dto';

@Controller('cart-detail')
export class CartDetailController {
    constructor(private readonly cartService: CartDetailService) { }

    @Get()
    async getAllCarts(): Promise<CartItem[]> {
        return await this.cartService.findAll();
    }

    @Get(':id')
    async getCartById(@Param('id') id: number): Promise<CartItem> {
        return await this.cartService.findOne(id);
    }

    @Post()
    async createCart(@Body() cart : CartItemDto): Promise<CartItem> {
        return await this.cartService.create(cart);
    }


    @Delete(':id')
    async deleteCart(@Param('id') id: number): Promise<void> {
        await this.cartService.delete(id);
    }
}