import { Customer } from '../entities/customer.entity';

export interface CustomerControllerInterface {
    findAll(): Promise<Customer[]>
    findOne(id: string): Promise<Customer | null>
    create(customer: object): Promise<void>
    remove(id: string): Promise<void>
}
