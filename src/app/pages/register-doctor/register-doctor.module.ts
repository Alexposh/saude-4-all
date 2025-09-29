import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDoctorPageRoutingModule } from './register-doctor-routing.module';

import { RegisterDoctorPage } from './register-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDoctorPageRoutingModule,
    RegisterDoctorPage
  ],
  declarations: []
})
export class RegisterDoctorPageModule {}
