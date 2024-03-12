import { Customer } from '../entities/customer.entity';

export interface CustomerServiceInterface {
    findAll(): Promise<Customer[]>
    findOne(id: number): Promise<Customer | null>
    create(customer: object): Promise<void>
    remove(id: number): Promise<void>
}
