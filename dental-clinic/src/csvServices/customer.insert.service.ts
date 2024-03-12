import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Customer } from "../entities/customer.entity";


@Injectable({scope: Scope.DEFAULT})
export class CustomerInsertService {
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>

    async customerInsert(): Promise<void> {
        const path = "./csv/customer.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {

                const customerRow = {
                    name: row[0],
                    age: Number(row[1]),
                    number: row[2],
                }

                const newCustomer = await this.customerRepository.create(customerRow);
                await this.customerRepository.save(newCustomer);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
