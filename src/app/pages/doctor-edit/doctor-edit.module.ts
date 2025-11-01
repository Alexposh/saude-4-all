import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorEditPageRoutingModule } from './doctor-edit-routing.module';

import { DoctorEditPage } from './doctor-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorEditPageRoutingModule,
    DoctorEditPage
  ],
  declarations: []
})
export class DoctorEditPageModule {}
