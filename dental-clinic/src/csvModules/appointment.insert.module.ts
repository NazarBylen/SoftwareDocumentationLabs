import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Appointment } from '../entities/appointment.entity';
import { AppointmentInsertService } from "../csvServices/appointment.insert.service"
import { AppointmentInsertController } from "../csvControllers/appointment.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Appointment])],
    controllers: [AppointmentInsertController],
    providers: [AppointmentInsertService],
})
export class AppointmentInsertModule {}
