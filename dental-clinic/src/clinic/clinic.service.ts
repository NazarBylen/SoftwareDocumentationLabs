import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from '../entities/clinic.entity';
import { ClinicServiceInterface } from "./clinic.service.interface";

@Injectable({scope: Scope.DEFAULT})
export class ClinicService implements ClinicServiceInterface {
    @InjectRepository(Clinic)
    private clinicRepository: Repository<Clinic>

    findAll(): Promise<Clinic[]> {
        return this.clinicRepository.find();
    }

    findOne(id: number): Promise<Clinic | null> {
        return this.clinicRepository.findOneBy({ id });
    }

    async create(clinic: object): Promise<void> {
        const newClinic = await this.clinicRepository.create(clinic);
        await this.clinicRepository.save(newClinic);
    }

    async edit(id: number, clinic: object): Promise<void> {
        await this.clinicRepository.save(
            {
                id: id,
                ...clinic
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.clinicRepository.delete(id);
    }
}
