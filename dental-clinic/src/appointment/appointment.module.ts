import { Module } from '@nestjs/common';
import { Appointment } from '../entities/appointment.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppointmentService } from "./appointment.service"
import { AppointmentController } from "./appointment.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Appointment])],
    controllers: [AppointmentController],
    providers: [AppointmentService],
})
export class AppointmentModule {}
