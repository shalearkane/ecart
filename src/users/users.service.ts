import { Injectable } from '@nestjs/common';
import { User } from './users.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import {UserDto} from './users.dto';
export type Users = any;

@Injectable()
export class UsersService {
  private   users: Users[];
  constructor(@InjectRepository(User)
  private readonly userRepo: Repository<User>) {
    this.users = [];
  }

  async findAll (): Promise<User[]> {
    return await this.userRepo.find();
  }

  async createUser (user : UserDto) : Promise<User> {

    const new_user = new User();
    new_user.email = user.email;
    new_user.password= user.password;
    new_user.date_of_birth= user.date_of_birth;
    new_user.phone = user.phone;
    new_user.usename= user.username;
    new_user.save();
    return new_user;

  }

  async findOne(username: string): Promise<Users | undefined> {
    this.users = [];
    const tmp = await this.findAll();
    tmp.map(val => {
        this.users.push({userId : val.id, username: val.usename , password : val.password})
      }
    );
    return await this.users.filter(val=> val.username === username )[0];
  }

  async findUser(id: number): Promise<User> {
    return await this.userRepo.findOne({ where : {id : id }})

  }

}


