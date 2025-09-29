import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPatientPageRoutingModule } from './register-patient-routing.module';

import { RegisterPatientPage } from './register-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPatientPageRoutingModule,
    RegisterPatientPage
  ],
  declarations: []
})
export class RegisterPatientPageModule {}
