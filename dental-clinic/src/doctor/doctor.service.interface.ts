import { Doctor } from '../entities/doctor.entity';

export interface DoctorServiceInterface {
    findAll(): Promise<Doctor[]>
    findOne(id: number): Promise<Doctor | null>
    create(doctor: object): Promise<void>
    edit(id:number, doctor: object): Promise<void>
    remove(id: number): Promise<void>
}
