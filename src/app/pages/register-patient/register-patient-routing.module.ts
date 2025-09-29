import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPatientPage } from './register-patient.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPatientPageRoutingModule {}
