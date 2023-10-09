import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, Redirect, Query, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Request } from "express";
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("docs")
    @Redirect('http://google.com/?query=nestjs', 302)
    getDocs(@Query('site') site: string) {
        if (site && site == 'kun') {
            return { url: 'http://kun.uz' };
        }
    }
    //http://localhost:3000/docs/?site=kun -ok
    //http://localhost:3000/docs/?site=mukhlis -error

    @Get("req")
    getRequest(@Req() request: Request): string {
        console.log(request);
        return `Bu ${request.method} metodi`
    }
    //http://localhost:3000/req

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    @Get("user/:id")
    getUserId(@Param("id") id: string): string {
        return this.appService.getUserId(id)
    }
    @Get('any/:id/:name')
    getAnyParams(@Param() params: Record<string, string>): string {
        return this.appService.getAnyParams(params);
    }
    @Post("add")
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.appService.createUser(createUserDto);
    }
    @Put("edit/:id")
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): string {
        return this.appService.updateUser(id, updateUserDto);
    }
    @Delete('del/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    deleteUser(@Param('id') id: string): string {
        return this.appService.deleteUser(id);
    }
};