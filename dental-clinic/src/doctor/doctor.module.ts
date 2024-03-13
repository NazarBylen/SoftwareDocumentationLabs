import { Module } from '@nestjs/common';
import { Doctor } from '../entities/doctor.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorService } from "./doctor.service"
import { DoctorController } from "./doctor.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Doctor])],
    controllers: [DoctorController],
    providers: [DoctorService],
})
export class DoctorModule {}
