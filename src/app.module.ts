import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CartDetailModule } from './cart-detail/cart-detail.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    CartModule,
    UsersModule,
    CartDetailModule,
    TypeOrmModule.forRoot({
      "name": "default",
      "type": "postgres",
      host: process.env.DB_MAIN_HOST,
      port: parseInt(process.env.DB_MAIN_PORT),
      username: process.env.DB_MAIN_USER,
      password: process.env.DB_MAIN_PASSWORD,
      database: process.env.DB_MAIN_DATABASE,
      "synchronize": true,
      "logging": false,
      "entities": ["src/entity/*.js"],
      "subscribers": ["src/subscriber/*.js"],
      "migrations": ["src/migration/*.js"],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
