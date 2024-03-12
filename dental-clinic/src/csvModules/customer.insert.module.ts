import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Customer } from '../entities/customer.entity';
import { CustomerInsertService } from "../csvServices/customer.insert.service"
import { CustomerInsertController } from "../csvControllers/customer.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [CustomerInsertController],
    providers: [CustomerInsertService],
})
export class CustomerInsertModule {}
