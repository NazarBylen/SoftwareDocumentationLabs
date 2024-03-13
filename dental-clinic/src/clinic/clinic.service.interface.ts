import { Clinic } from '../entities/clinic.entity';

export interface ClinicServiceInterface {
    findAll(): Promise<Clinic[]>
    findOne(id: number): Promise<Clinic | null>
    create(clinic: object): Promise<void>
    edit(id:number, clinic: object): Promise<void>
    remove(id: number): Promise<void>
}
