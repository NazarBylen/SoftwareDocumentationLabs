import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Clinic } from "./clinic.entity";
import { Doctor } from "./doctor.entity";

export enum ServiceType {
    braces = "braces",
    remove = "remove",
    toothfilling = "toothfilling"
}

@Entity('service')
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    duration: number;

    @Column()
    price: number;

    @Column({ nullable: false, type: "enum", enum: ServiceType })
    serviceType: ServiceType;

    @ManyToOne(() => Doctor, (doctor) => doctor.service, {nullable: false})
    doctor: Doctor

    @ManyToOne(() => Clinic, (clinic) => clinic.service, {nullable: false})
    clinic: Clinic
}
