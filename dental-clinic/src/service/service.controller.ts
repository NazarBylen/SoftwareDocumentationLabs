import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { Service } from '../entities/service.entity';
import { ServiceService } from './service.service';
import { ServiceControllerInterface } from "./service.controller.interface";

@Controller('service')
export class ServiceController implements ServiceControllerInterface{
    @Inject()
    private serviceService: ServiceService

    @Get()
    findAll(): Promise<Service[]> {
        return this.serviceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Service> {
        return this.serviceService.findOne(Number(id));
    }

    @Post()
    create(@Body() service: object): Promise<void> {
        return this.serviceService.create(service);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() service: object): Promise<void> {
        return this.serviceService.edit(Number(id), service);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.serviceService.remove(Number(id));
    }
}
