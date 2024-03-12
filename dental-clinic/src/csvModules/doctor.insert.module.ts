import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Doctor } from '../entities/doctor.entity';
import { DoctorInsertService } from "../csvServices/doctor.insert.service"
import { DoctorInsertController } from "../csvControllers/doctor.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Doctor])],
    controllers: [DoctorInsertController],
    providers: [DoctorInsertService],
})
export class DoctorInsertModule {}
