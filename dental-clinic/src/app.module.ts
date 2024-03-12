import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './entities/customer.entity'
import { Doctor } from './entities/doctor.entity'
import { Clinic } from './entities/clinic.entity'
import { Appointment } from './entities/appointment.entity'
import { Service } from './entities/service.entity'
import { Payment } from './entities/payment.entity'
import { ClinicInsertModule } from "./csvModules/clinic.insert.module";
import { CustomerInsertModule } from "./csvModules/customer.insert.module";
import { DoctorInsertModule } from "./csvModules/doctor.insert.module";
import { ServiceInsertModule } from "./csvModules/service.insert.module";
import { PaymentInsertModule } from "./csvModules/payment.insert.module";
import { AppointmentInsertModule } from "./csvModules/appointment.insert.module";
import { CustomerModule } from './customer/customer.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'dentalclinic',
      entities: [ Customer, Doctor, Clinic, Appointment, Service, Payment ],
      synchronize: true,
    }),
    ClinicInsertModule, CustomerInsertModule, DoctorInsertModule, PaymentInsertModule, ServiceInsertModule, AppointmentInsertModule, CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
