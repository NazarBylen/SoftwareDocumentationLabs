import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { Payment } from '../entities/payment.entity';
import { PaymentService } from './payment.service';
import { PaymentControllerInterface } from "./payment.controller.interface";

@Controller('payment')
export class PaymentController implements PaymentControllerInterface{
    @Inject()
    private paymentService: PaymentService

    @Get()
    findAll(): Promise<Payment[]> {
        return this.paymentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Payment> {
        return this.paymentService.findOne(Number(id));
    }

    @Post()
    create(@Body() payment: object): Promise<void> {
        return this.paymentService.create(payment);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() payment: object): Promise<void> {
        return this.paymentService.edit(Number(id), payment);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.paymentService.remove(Number(id));
    }
}
