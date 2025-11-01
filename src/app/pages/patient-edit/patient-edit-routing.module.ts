import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientEditPage } from './patient-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PatientEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientEditPageRoutingModule {}
