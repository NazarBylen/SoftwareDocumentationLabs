import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Payment } from "./payment.entity";
import { Service } from "./service.entity";

@Entity('clinic')
export class Clinic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    address: string;

    @Column({ nullable: false, unique: true})
    number: string;

    @OneToMany(() => Payment, (payment) => payment.clinic)
    payment: Payment[]

    @OneToMany(() => Service, (service) => service.clinic)
    service: Service[]
}
