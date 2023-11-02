import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { CartDto } from './cart.dto';

@Controller('carts')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get()
    async getAllCarts(): Promise<Cart[]> {
        return await this.cartService.findAll();
    }

    @Get(':id')
    async getCartById(@Param('id') id: number): Promise<Cart> {
        return await this.cartService.findOne(id);
    }

    @Post()
    async createCart(@Body() cart : CartDto): Promise<Cart> {
        return await this.cartService.create(cart);
    }


    @Delete(':id')
    async deleteCart(@Param('id') id: number): Promise<void> {
        await this.cartService.delete(id);
    }
}