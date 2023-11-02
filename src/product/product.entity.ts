// export class TaskEntity {}
import { Column, Entity, PrimaryGeneratedColumn ,  ManyToOne , OneToMany , BaseEntity} from 'typeorm';
import {CartItem} from '../cart-detail/cart-detail.entity'
@Entity()
export class Product  extends BaseEntity {
  @PrimaryGeneratedColumn()
    id:number
  @Column({ length: 500 })
    product_name: string;
  @Column()
    product_price: number;
  @Column({ length: 500 })
    img: string;
  @Column('text')
    desc: string;
    @Column('float')
    discount: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdAt: number;
  @OneToMany(type => CartItem, detail => detail.id)
    details: CartItem[];
}