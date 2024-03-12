import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerControllerInterface } from "./customer.controller.interface";

@Controller('customers')
export class CustomerController implements CustomerControllerInterface{
    @Inject()
    private customerService: CustomerService

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findOne(Number(id));
    }

    @Post()
    create(@Body() customer: object) {
        return this.customerService.create(customer);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.customerService.remove(Number(id));
    }
}
