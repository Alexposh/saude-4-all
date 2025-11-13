import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentCreatePage } from './appointment-create.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentCreatePageRoutingModule {}
