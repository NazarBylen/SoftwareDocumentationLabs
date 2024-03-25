import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';
import { ServiceServiceInterface } from "./service.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class ServiceService implements ServiceServiceInterface {
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>

    findAll(): Promise<Service[]> {
        return this.serviceRepository.find({
            relations: ['doctor', 'clinic']
        });
    }

    findOne(id: number): Promise<Service | null> {
        return this.serviceRepository.findOneBy({ id });
    }

    async create(service: object): Promise<void> {
        const newService = await this.serviceRepository.create(service);
        await this.serviceRepository.save(newService);
    }

    async edit(id: number, service: object): Promise<void> {
        await this.serviceRepository.save(
            {
                id: id,
                ...service
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.serviceRepository.delete(id);
    }
}
