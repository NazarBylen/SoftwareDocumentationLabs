import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Clinic } from '../entities/clinic.entity';
import { ClinicInsertService } from "../csvServices/clinic.insert.service"
import { ClinicInsertController } from "../csvControllers/clinic.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Clinic])],
    controllers: [ClinicInsertController],
    providers: [ClinicInsertService],
})
export class ClinicInsertModule {}
