import { Injectable } from '@nestjs/common';
import { CartItem } from './cart-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CartItemDto } from './cart-detail.dto';

@Injectable()
export class CartDetailService {
    constructor(
        @InjectRepository(CartItem)
        private readonly cartRepo: Repository<CartItem>,
    ) { }

    async findAll(): Promise<CartItem[]> {
        return await this.cartRepo.find({
        });
    }

    async findOne(id: number): Promise<CartItem> {
        return await this.cartRepo.findOne({ where: { id: id } })
    }

    async findDate(): Promise<CartItem[]> {

        return await this.cartRepo.find({
            take: 5

        })
    }

    async create(cart: CartItemDto): Promise<CartItem> {
        const newDetail = new CartItem();
        newDetail.product_id.id = cart.product_id
        newDetail.cart_id.id = cart.cart_id
        newDetail.qty = cart.qty
        return await newDetail;
    }

    async update(task: CartItem): Promise<UpdateResult> {
        return await this.cartRepo.update(task.id, task);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cartRepo.delete(id);
    }
}