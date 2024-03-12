import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Payment } from '../entities/payment.entity';
import { PaymentInsertService } from "../csvServices/payment.insert.service"
import { PaymentInsertController } from "../csvControllers/payment.insert.controller"

@Module({
    imports: [TypeOrmModule.forFeature([Payment])],
    controllers: [PaymentInsertController],
    providers: [PaymentInsertService],
})
export class PaymentInsertModule {}
