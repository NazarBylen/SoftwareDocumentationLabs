import { Payment } from '../entities/payment.entity';

export interface PaymentServiceInterface {
    findAll(): Promise<Payment[]>
    findOne(id: number): Promise<Payment | null>
    create(payment: object): Promise<void>
    edit(id:number, payment: object): Promise<void>
    remove(id: number): Promise<void>
}
