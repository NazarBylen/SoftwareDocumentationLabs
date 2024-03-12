import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from "./customer.entity";
import { Clinic } from "./clinic.entity";

export enum PaymentType {
    cash = "cash",
    card = "card",
}

@Entity('payment')
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    amount: number;

    @Column({ nullable: false, type: "enum", enum: PaymentType })
    paymentType: PaymentType;

    @ManyToOne(() => Customer, (customer) => customer.payment, {nullable: false})
    customer: Customer

    @ManyToOne(() => Clinic, (clinic) => clinic.payment, {nullable: false})
    clinic: Clinic
}
