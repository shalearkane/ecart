import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import {ProductDto} from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {

  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }
  @Get('/date')
  findDate(): Promise<Product[]> {
    return this.productService.findDate();
  }

  @Get('/discount')
  findSaleProduct(): Promise<Product[]> {
    return this.productService.findSaleProduct();
  }

  @Get(':id')
  get(@Param() params) {
    return this.productService.findOne(params.id);
  }

  @Post()
  create(@Body() product : ProductDto) {
    return this.productService.create(product);
  }

  @Put()
  update(@Body() task: Product) {
    return this.productService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.productService.delete(params.id);
  }
}