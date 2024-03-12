import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Clinic } from "../entities/clinic.entity";


@Injectable({scope: Scope.DEFAULT})
export class ClinicInsertService {
    @InjectRepository(Clinic)
    private clinicRepository: Repository<Clinic>

    async clinicInsert(): Promise<void> {
        const path = "./csv/clinic.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {

                const clinicRow = {
                    name: row[0],
                    address: row[1],
                    number: row[2],
                }

                const newClinic = await this.clinicRepository.create(clinicRow);
                await this.clinicRepository.save(newClinic);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
