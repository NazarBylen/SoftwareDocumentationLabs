import { Payment } from '../entities/payment.entity';

export interface PaymentControllerInterface {
    findAll(): Promise<Payment[]>
    findOne(id: string): Promise<Payment | null>
    create(payment: object): Promise<void>
    patch(id: string, payment: object): Promise<void>
    remove(id: string): Promise<void>
}
