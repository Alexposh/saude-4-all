import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextAppointmentsPage } from './next-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: NextAppointmentsPage
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class NextAppointmentsPageRoutingModule {}
