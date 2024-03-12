import { Controller, Get, Inject } from "@nestjs/common";
import { PaymentInsertService } from "../csvServices/payment.insert.service";

@Controller('payment-insert')
export class PaymentInsertController {
    @Inject()
    private paymentInsertService: PaymentInsertService

    @Get()
    insertData(): Promise<void> {
        return this.paymentInsertService.paymentInsert();
    }
}
