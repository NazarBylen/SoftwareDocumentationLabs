import { Module } from '@nestjs/common';
import { Service } from '../entities/service.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceService } from "./service.service"
import { ServiceController } from "./service.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Service])],
    controllers: [ServiceController],
    providers: [ServiceService],
})
export class ServiceModule {}
