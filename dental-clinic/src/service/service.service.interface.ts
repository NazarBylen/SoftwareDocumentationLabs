import { Service } from '../entities/service.entity';

export interface ServiceServiceInterface {
    findAll(): Promise<Service[]>
    findOne(id: number): Promise<Service | null>
    create(service: object): Promise<void>
    edit(id:number, service: object): Promise<void>
    remove(id: number): Promise<void>
}
