import { Controller, Get, Inject } from "@nestjs/common";
import { AppointmentInsertService } from "../csvServices/appointment.insert.service";

@Controller('appointment-insert')
export class AppointmentInsertController {
    @Inject()
    private appointmentInsertService: AppointmentInsertService

    @Get()
    insertData(): Promise<void> {
        return this.appointmentInsertService.appointmentInsert();
    }
}
