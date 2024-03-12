import { parse } from "csv-parse";
import * as fs from "fs";
import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Payment } from "../entities/payment.entity";


@Injectable({scope: Scope.DEFAULT})
export class PaymentInsertService {
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>

    async paymentInsert(): Promise<void> {
        const path = "./csv/payment.csv";
        fs.createReadStream(path)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on("data", async (row) => {
                const paymentRow = {
                    date: row[0],
                    amount: Number(row[1]),
                    paymentType: row[2],
                    customer: row[3],
                    clinic: row[4],
                }

                const newPayment = await this.paymentRepository.create(paymentRow);
                await this.paymentRepository.save(newPayment);
            })
            .on("error", function (error) {
                console.log(error.message);
            })
            .on("end", function () {
                console.log("Data was inserted successful");
            });
    }
}
