import { Doctor } from '../entities/doctor.entity';

export interface DoctorControllerInterface {
    findAll(): Promise<Doctor[]>
    findOne(id: string): Promise<Doctor | null>
    create(doctor: object): Promise<void>
    patch(id: string, doctor: object): Promise<void>
    remove(id: string): Promise<void>
}
