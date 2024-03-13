import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';
import { DoctorServiceInterface } from "./doctor.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class DoctorService implements DoctorServiceInterface {
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>

    findAll(): Promise<Doctor[]> {
        return this.doctorRepository.find();
    }

    findOne(id: number): Promise<Doctor | null> {
        return this.doctorRepository.findOneBy({ id });
    }

    async create(doctor: object): Promise<void> {
        const newDoctor = await this.doctorRepository.create(doctor);
        await this.doctorRepository.save(newDoctor);
    }

    async edit(id: number, doctor: object): Promise<void> {
        await this.doctorRepository.save(
            {
                id: id,
                ...doctor
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.doctorRepository.delete(id);
    }
}
