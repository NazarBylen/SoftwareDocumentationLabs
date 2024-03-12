import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { CustomerServiceInterface } from "./customer.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class CustomerService implements CustomerServiceInterface {
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>

    findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    findOne(id: number): Promise<Customer | null> {
        return this.customerRepository.findOneBy({ id });
    }

    async create(client: object): Promise<void> {
        const newClient = await this.customerRepository.create(client);
        await this.customerRepository.save(newClient);
    }

    async remove(id: number): Promise<void> {
        await this.customerRepository.delete(id);
    }
}
