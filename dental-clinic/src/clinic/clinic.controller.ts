import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post, Render } from '@nestjs/common';
import { Clinic } from '../entities/clinic.entity';
import { ClinicService } from './clinic.service';
import { ClinicControllerInterface } from "./clinic.controller.interface";

@Controller('clinic')
export class ClinicController implements ClinicControllerInterface{
    @Inject()
    private clinicService: ClinicService

    @Get()
    @Render('clinics')
    async findAll(): Promise<{ clinics: Clinic[] }> {
        const clinics = await this.clinicService.findAll()
        return { clinics };
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Clinic> {
        return this.clinicService.findOne(Number(id));
    }

    @Post()
    create(@Body() clinic: object): Promise<void> {
        return this.clinicService.create(clinic);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() clinic: object): Promise<void> {
        return this.clinicService.edit(Number(id), clinic);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string): Promise<void> {
        return this.clinicService.remove(Number(id));
    }
}
