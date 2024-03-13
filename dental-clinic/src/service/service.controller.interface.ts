import { Service } from '../entities/service.entity';

export interface ServiceControllerInterface {
    findAll(): Promise<Service[]>
    findOne(id: string): Promise<Service | null>
    create(service: object): Promise<void>
    patch(id: string, service: object): Promise<void>
    remove(id: string): Promise<void>
}
