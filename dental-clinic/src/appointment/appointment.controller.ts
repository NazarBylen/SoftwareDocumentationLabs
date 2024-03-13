import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { Appointment } from '../entities/appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentControllerInterface } from "./appointment.controller.interface";

@Controller('appointment')
export class AppointmentController implements AppointmentControllerInterface{
    @Inject()
    private appointmentService: AppointmentService

    @Get()
    findAll(): Promise<Appointment[]> {
        return this.appointmentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Appointment> {
        return this.appointmentService.findOne(Number(id));
    }

    @Post()
    create(@Body() appointment: object): Promise<void> {
        return this.appointmentService.create(appointment);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() appointment: object): Promise<void> {
        return this.appointmentService.edit(Number(id), appointment);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.appointmentService.remove(Number(id));
    }
}
