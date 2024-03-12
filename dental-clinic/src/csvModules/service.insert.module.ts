import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Service } from '../entities/service.entity';
import { ServiceInsertService } from "../csvServices/service.insert.service"
import { ServiceInsertController } from "../csvControllers/service.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Service])],
    controllers: [ServiceInsertController],
    providers: [ServiceInsertService],
})
export class ServiceInsertModule {}
