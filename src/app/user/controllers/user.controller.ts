import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AdminGuard } from 'src/app/auth/role.guard';
import { CreateUserDto, UpdateUserDto } from '../dtos';
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
    const foundByEmail = await this.appService.findUserByEmail(
      createUserDto.email,
    );

    if (!!foundByEmail) {
      throw new BadRequestException('This email already exists!');
    }

    await this.appService.createUser(createUserDto);
    return 'User has been created!';
  }

  @Delete('delete/:id')
  @UseGuards(AdminGuard)
  async removeUser(@Param('id') userId: string) {
    const userExists = await this.appService.findUserById(userId);

    if (!userExists) {
      throw new BadRequestException('This user doesnt exists');
    }

    return this.appService.deleteUser(userId);
  }

  @Put('update/:id')
  @UseGuards(AdminGuard)
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userExists = await this.appService.findUserById(userId);

    if (!userExists) {
      throw new BadRequestException('This user doesnt exists');
    }

    return this.appService.updateUser(userId, updateUserDto);
  }
}
