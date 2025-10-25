import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDoctorPageRoutingModule } from './login-doctor-routing.module';

import { LoginDoctorPage } from './login-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDoctorPageRoutingModule,
    LoginDoctorPage
  ],
  declarations: []
})
export class LoginDoctorPageModule {}
