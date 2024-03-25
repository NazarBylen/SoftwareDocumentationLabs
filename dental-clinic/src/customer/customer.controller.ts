import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post, Render } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerControllerInterface } from "./customer.controller.interface";

@Controller('customer')
export class CustomerController implements CustomerControllerInterface{
    @Inject()
    private customerService: CustomerService

    @Get()
    @Render('customers')
    async findAll(): Promise<{ customers: Customer[] }> {
        const customers = await this.customerService.findAll()
        return { customers };
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findOne(Number(id));
    }

    @Post()
    async create(@Body() customer: object): Promise<void> {
        return this.customerService.create(customer);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() customer: object): Promise<void> {
        return this.customerService.edit(Number(id), customer);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.customerService.remove(Number(id));
    }
}
