import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Appointment } from "../entities/appointment.entity";


@Injectable({scope: Scope.DEFAULT})
export class AppointmentInsertService {
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>

    async appointmentInsert(): Promise<void> {
        const path = "./csv/appointment.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {

                const appointmentRow = {
                    date: row[0],
                    customer: row[1],
                    doctor: row[2],
                }

                const newAppointment = await this.appointmentRepository.create(appointmentRow);
                await this.appointmentRepository.save(newAppointment);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
