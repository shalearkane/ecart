import { Injectable } from '@nestjs/common';
import { Cart } from './cart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CartDto } from './cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly cartRepo: Repository<Cart>,
    ) { }

    async findAll(): Promise<Cart[]> {
        return await this.cartRepo.find({
        });
    }

    async findOne(id: number): Promise<Cart> {
        return await this.cartRepo.findOne({ where: { id: id } })
    }

    async findDate(): Promise<Cart[]> {

        return await this.cartRepo.find({
            // select : ["cart_name"],
            take: 5

        })
    }

    async create(cart: CartDto): Promise<Cart> {
        const newCart = new Cart();
        newCart.user.id = cart.user
        return await newCart;
    }

    async update(task: Cart): Promise<UpdateResult> {
        return await this.cartRepo.update(task.id, task);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cartRepo.delete(id);
    }
}