import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'next-appointments',
    loadChildren: () => import('./pages/next-appointments/next-appointments.module').then( m => m.NextAppointmentsPageModule)
  },
  { path: 'appointment-edit', 
    loadChildren: () => import('./pages/appointment-edit/appointment-edit.module').then(m => m.AppointmentEditPageModule) 
  },
  {
    path: 'appointment-history',
    loadChildren: () => import('./pages/appointment-history/appointment-history.module').then( m => m.AppointmentHistoryPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
