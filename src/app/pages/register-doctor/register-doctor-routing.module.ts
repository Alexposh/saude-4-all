import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDoctorPage } from './register-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDoctorPageRoutingModule {}
