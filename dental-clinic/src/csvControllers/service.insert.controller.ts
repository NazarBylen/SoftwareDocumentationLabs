import { Controller, Get, Inject } from "@nestjs/common";
import { ServiceInsertService } from "../csvServices/service.insert.service";

@Controller('service-insert')
export class ServiceInsertController {
    @Inject()
    private serviceInsertService: ServiceInsertService

    @Get()
    insertData(): Promise<void> {
        return this.serviceInsertService.serviceInsert();
    }
}
