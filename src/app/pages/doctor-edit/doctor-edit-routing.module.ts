import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorEditPage } from './doctor-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorEditPageRoutingModule {}
