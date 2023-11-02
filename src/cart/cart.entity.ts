// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne  , OneToMany } from 'typeorm';
import { User } from '../users/users.entity';
import {CartItem} from '../cart-detail/cart-detail.entity'
@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
    id:number
  @Column()
    total_money: number;
  @Column()
    date_created: Date;
  @ManyToOne(type => User, user => user.id)
    user: User;
}