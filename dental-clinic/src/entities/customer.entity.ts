import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Appointment } from "./appointment.entity";
import { Payment } from "./payment.entity";

@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    age: number;

    @Column({ nullable: false})
    number: string;

    @OneToMany(() => Appointment, (appointment) => appointment.customer)
    appointment: Appointment[]

    @OneToMany(() => Payment, (payment) => payment.customer)
    payment: Payment[]
}
