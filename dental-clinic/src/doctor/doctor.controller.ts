import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { Doctor } from '../entities/doctor.entity';
import { DoctorService } from './doctor.service';
import { DoctorControllerInterface } from "./doctor.controller.interface";

@Controller('doctor')
export class DoctorController implements DoctorControllerInterface{
    @Inject()
    private doctorService: DoctorService

    @Get()
    findAll(): Promise<Doctor[]> {
        return this.doctorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Doctor> {
        return this.doctorService.findOne(Number(id));
    }

    @Post()
    create(@Body() doctor: object): Promise<void> {
        return this.doctorService.create(doctor);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() doctor: object): Promise<void> {
        return this.doctorService.edit(Number(id), doctor);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.doctorService.remove(Number(id));
    }
}
