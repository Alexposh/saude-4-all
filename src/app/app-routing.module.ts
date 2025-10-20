import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) // import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'next-appointments',
    loadChildren: () => import('./pages/next-appointments/next-appointments.module').then( m => m.NextAppointmentsPageModule)
  },
  { path: 'appointment-edit/:id', 
    loadChildren: () => import('./pages/appointment-edit/appointment-edit.module').then(m => m.AppointmentEditPageModule) 
  },
  {
    path: 'appointment-history/:id',
    loadChildren: () => import('./pages/appointment-history/appointment-history.module').then( m => m.AppointmentHistoryPageModule)
  },
  {
    path: 'doctor-profile/:id',
    loadChildren: () => import('./pages/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-patient',
    loadChildren: () => import('./pages/register-patient/register-patient.module').then( m => m.RegisterPatientPageModule)
  },
  {
    path: 'register-doctor',
    loadChildren: () => import('./pages/register-doctor/register-doctor.module').then( m => m.RegisterDoctorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'patient-home/:id',
    loadChildren: () => import('./pages/patient-home/patient-home.module').then( m => m.PatientHomePageModule)
  },
  {
    path: 'create-appointment/:id',
    loadChildren: () => import('./pages/create-appointment/create-appointment.module').then( m => m.CreateAppointmentPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
