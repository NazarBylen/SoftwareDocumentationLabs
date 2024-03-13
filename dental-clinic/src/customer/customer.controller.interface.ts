import { Customer } from '../entities/customer.entity';

export interface CustomerControllerInterface {
    findAll(): Promise<{ customers: Customer[] }>
    findOne(id: string): Promise<Customer | null>
    create(customer: object): Promise<void>
    patch(id: string, customer: object): Promise<void>
    remove(id: string): Promise<void>
}
