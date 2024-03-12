import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Appointment } from "./appointment.entity";
import { Service } from "./service.entity";

export enum DoctorType {
    dentist = "dentist",
    surgeon = "surgeon",
    orthodontist = "orthodontist",
}

@Entity('doctor')
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    education: string;

    @Column({ nullable: false})
    number: string;

    //type: dentist, surgeon, orthodontist
    @Column({ nullable: false, type: "enum", enum: DoctorType })
    type: DoctorType;

    @OneToMany(() => Appointment, (appointment) => appointment.doctor)
    appointment: Appointment[]

    @OneToMany(() => Service, (service) => service.doctor)
    service: Service[]
}
