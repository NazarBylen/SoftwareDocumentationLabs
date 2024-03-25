import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../entities/payment.entity';
import { PaymentServiceInterface } from "./payment.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class PaymentService implements PaymentServiceInterface {
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>

    findAll(): Promise<Payment[]> {
        return this.paymentRepository.find({
            relations: ['customer', 'clinic']
        });
    }

    findOne(id: number): Promise<Payment | null> {
        return this.paymentRepository.findOneBy({ id });
    }

    async create(payment: object): Promise<void> {
        const newPayment = await this.paymentRepository.create(payment);
        await this.paymentRepository.save(newPayment);
    }

    async edit(id: number, payment: object): Promise<void> {
        await this.paymentRepository.save(
            {
                id: id,
                ...payment
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.paymentRepository.delete(id);
    }
}
