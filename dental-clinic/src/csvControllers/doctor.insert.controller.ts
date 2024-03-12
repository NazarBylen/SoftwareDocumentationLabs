import { Controller, Get, Inject } from "@nestjs/common";
import { DoctorInsertService } from "../csvServices/doctor.insert.service";

@Controller('doctor-insert')
export class DoctorInsertController {
    @Inject()
    private doctorInsertService: DoctorInsertService

    @Get()
    insertData(): Promise<void> {
        return this.doctorInsertService.doctorInsert();
    }
}
