import { Column, Entity, PrimaryGeneratedColumn ,  OneToMany , BaseEntity } from 'typeorm';
import { Cart } from '../cart/cart.entity'

@Entity()
export class User  extends BaseEntity {
  @PrimaryGeneratedColumn()
    id:number
  @Column({ length: 500 })
    usename: string;
  @Column({ length: 500 })
    password: string;
  @Column({ length: 500 })
    phone: string;
  @Column()
    email: string;
  @Column()
    date_of_birth: Date;
  @OneToMany(type => Cart, cart => cart.id)
    carts: Cart[];
}