import { Module } from '@nestjs/common';
import { Clinic } from '../entities/clinic.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClinicService } from "./clinic.service"
import { ClinicController } from "./clinic.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Clinic])],
    controllers: [ClinicController],
    providers: [ClinicService],
})
export class ClinicModule {}
