import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientEditPageRoutingModule } from './patient-edit-routing.module';

import { PatientEditPage } from './patient-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientEditPageRoutingModule,
    PatientEditPage
  ],
  declarations: []
})
export class PatientEditPageModule {}
