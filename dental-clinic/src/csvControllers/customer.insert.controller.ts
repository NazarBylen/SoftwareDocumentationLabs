import { Controller, Get, Inject } from "@nestjs/common";
import { CustomerInsertService } from "../csvServices/customer.insert.service";

@Controller('customer-insert')
export class CustomerInsertController {
    @Inject()
    private customerInsertService: CustomerInsertService

    @Get()
    insertData(): Promise<void> {
        return this.customerInsertService.customerInsert();
    }
}
