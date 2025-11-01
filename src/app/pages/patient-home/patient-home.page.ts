import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { PatientService } from 'src/app/services/patient/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.page.html',
  styleUrls: ['./patient-home.page.scss'],
  imports: [HeaderComponent, IonicModule],
})
export class PatientHomePage implements OnInit {

 private patientService = inject(PatientService);
 private router = inject(Router);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    console.log(this.patientId);
    this.getPatient(this.patientId as string);
    
  }

  patientId: string | null = '';
  patient:any = { };
  userImage:string = 'https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-svg-download-png-6515860.png'
  appointments: Appointment[] = [];


  getPatientAppointments(idOfPatient:string){
    
  }

  editProfile(){
    console.log("redirect to patient-edit");
    this.router.navigate(['/patient-edit', this.patient.id]);
  }

  getPatient(idOfPatient:string){
    this.patientService.getPatientById(idOfPatient).subscribe({
      next: (patient)=>{
        this.patient = patient;
        console.log(this.patient);
      },
      error: (err) =>{
        console.log("An error was encountered when retrieving the patient: "+ err);
      } 
    });

  }

  

}
