import { Controller , Get , Post , Body, Param} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserDto } from './users.dto';
@Controller('users')
export class UsersController {
    constructor(private userservice : UsersService ){

    }
    @Post()
    createUser( @Body() user : UserDto) {
        console.log(user);
        return this.userservice.createUser(user);

    }
    @Get(':id')
    getUsers(@Param() id :number ){
        return this.userservice.findUser(id);
    }
    @Get()
    sayhello(){
        console.log("oke");
    }

}
