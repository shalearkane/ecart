// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { Product } from '../product/product.entity'
@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  price: number;
  @Column()
  qty: number;
  @Column()
  total_cost: number;

  @ManyToOne(type => Cart, cart => cart.id)
  cart_id: Cart;
  @ManyToOne(type => Product, product => product.id)
  product_id: Product;

}