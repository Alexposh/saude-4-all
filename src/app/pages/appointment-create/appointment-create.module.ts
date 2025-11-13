import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentCreatePageRoutingModule } from './appointment-create-routing.module';

import { AppointmentCreatePage } from './appointment-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentCreatePageRoutingModule,
    AppointmentCreatePage
  ],
  declarations: []
})
export class AppointmentCreatePageModule {}
