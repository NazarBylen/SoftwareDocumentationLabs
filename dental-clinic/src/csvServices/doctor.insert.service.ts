import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Doctor } from "../entities/doctor.entity";


@Injectable({scope: Scope.DEFAULT})
export class DoctorInsertService {
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>

    async doctorInsert(): Promise<void> {
        const path = "./csv/doctor.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {

                const doctorRow = {
                    name: row[0],
                    education: row[1],
                    number: row[2],
                    type: row[3],
                }

                const newDoctor = await this.doctorRepository.create(doctorRow);
                await this.doctorRepository.save(newDoctor);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
