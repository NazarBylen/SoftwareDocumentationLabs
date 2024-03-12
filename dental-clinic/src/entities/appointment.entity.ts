import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from "./doctor.entity";
import { Customer } from "./customer.entity";

@Entity('appointment')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @ManyToOne(() => Customer, (customer) => customer.appointment, {nullable: false})
    customer: Customer

    @ManyToOne(() => Doctor, (doctor) => doctor.appointment, {nullable: false})
    doctor: Doctor
}
