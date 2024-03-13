import { Appointment } from '../entities/appointment.entity';

export interface AppointmentServiceInterface {
    findAll(): Promise<Appointment[]>
    findOne(id: number): Promise<Appointment | null>
    create(appointment: object): Promise<void>
    edit(id:number, appointment: object): Promise<void>
    remove(id: number): Promise<void>
}
