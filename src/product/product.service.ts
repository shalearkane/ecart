import { Injectable } from '@nestjs/common';
import { Product } from './product.entity' ;
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , Not , }  from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {ProductDto} from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findAll (): Promise<Product[]> {
    return await this.productRepo.find({
    });
  }

  async findOne (id: number): Promise<Product> {
    return await this.productRepo.findOne({ where : {id : id }})
  }

  async findDate(): Promise<Product[]> {

    return await this.productRepo.find({
      // select : ["product_name"],
      take : 5

    })
  }

  async findSaleProduct() : Promise<Product[]> {
    return await this.productRepo.find({
      where : {discount : Not(0) }
    })
  }

  async create ( product : ProductDto ): Promise<Product> {
    const newProduct = new Product();
    newProduct.product_name = product.product_name;
    newProduct.product_price = Number(product.product_price);
    newProduct.img = product.img;
    newProduct.desc = product.desc;
    newProduct.discount=Number(product.discount);
    newProduct.save();
    return await newProduct;
  }

  async update(task: Product): Promise<UpdateResult> {
    return await this.productRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepo.delete(id);
  }
}