import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const foundByEmail = await this.appService.findByEmail(createUserDto.email);

    if (!!foundByEmail) {
      throw new BadRequestException('This email already exists!');
    }

    await this.appService.createUser(createUserDto);
    return 'User has been created!';
  }
}
