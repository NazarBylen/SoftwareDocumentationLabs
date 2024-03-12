import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Service } from "../entities/service.entity";


@Injectable({scope: Scope.DEFAULT})
export class ServiceInsertService {
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>

    async serviceInsert(): Promise<void> {
        const path = "./csv/service.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {

                const serviceRow = {
                    duration: row[0],
                    price: row[1],
                    serviceType: row[2],
                    doctor: row[3],
                    clinic: row[4],
                }

                const newService = await this.serviceRepository.create(serviceRow);
                await this.serviceRepository.save(newService);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
