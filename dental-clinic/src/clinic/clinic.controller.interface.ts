import { Clinic } from '../entities/clinic.entity';

export interface ClinicControllerInterface {
    findAll(): Promise<Clinic[]>
    findOne(id: string): Promise<Clinic | null>
    create(clinic: object): Promise<void>
    patch(id: string, clinic: object): Promise<void>
    remove(id: string): Promise<void>
}
