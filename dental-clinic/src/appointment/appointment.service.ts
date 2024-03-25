import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
import { AppointmentServiceInterface } from "./appointment.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class AppointmentService implements AppointmentServiceInterface {
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>

    findAll(): Promise<Appointment[]> {
        return this.appointmentRepository.find({
                relations: ['customer', 'doctor']
            }
        );
    }

    findOne(id: number): Promise<Appointment | null> {
        return this.appointmentRepository.findOneBy({ id });
    }

    async create(appointment: object): Promise<void> {
        const newAppointment = await this.appointmentRepository.create(appointment);
        await this.appointmentRepository.save(newAppointment);
    }

    async edit(id: number, appointment: object): Promise<void> {
        await this.appointmentRepository.save(
            {
                id: id,
                ...appointment
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.appointmentRepository.delete(id);
    }
}
