import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextAppointmentsPageRoutingModule } from './next-appointments-routing.module';

import { NextAppointmentsPage } from './next-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextAppointmentsPageRoutingModule,
    NextAppointmentsPage
  ],
  declarations: []
})
export class NextAppointmentsPageModule {}
