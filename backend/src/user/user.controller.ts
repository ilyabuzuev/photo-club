import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { LoginUserDTO } from './dto/LoginUserDTO';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }

  @Post('login')
  login(@Body() user: LoginUserDTO) {
    return this.userService.login(user);
  }

  @Get('all')
  getAll() {
    return this.userService.getAll();
  }

  @Get('current')
  getCurrentUser(@Req() req) {
    return this.userService.getCurrentUser(req.body);
  }

  @Get(':id')
  getByEmail(@Param('id') id: string) {
    return this.userService.getById(id);
  }
}
