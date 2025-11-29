import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.getUserById(id);
  }

  @Post('users')
  createUser(
    @Body('name') name: string,
    @Body('age', ParseIntPipe) age: number,
  ) {
    return this.appService.createUser(name, age);
  }
}
