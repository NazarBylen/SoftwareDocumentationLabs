import { Controller, Get, Inject } from "@nestjs/common";
import { ClinicInsertService } from "../csvServices/clinic.insert.service";

@Controller('clinic-insert')
export class ClinicInsertController {
    @Inject()
    private clinicInsertService: ClinicInsertService

    @Get()
    insertData(): Promise<void> {
        return this.clinicInsertService.clinicInsert();
    }
}
