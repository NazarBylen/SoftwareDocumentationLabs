import { Appointment } from '../entities/appointment.entity';

export interface AppointmentControllerInterface {
    findAll(): Promise<Appointment[]>
    findOne(id: string): Promise<Appointment | null>
    create(appointment: object): Promise<void>
    patch(id: string, appointment: object): Promise<void>
    remove(id: string): Promise<void>
}
