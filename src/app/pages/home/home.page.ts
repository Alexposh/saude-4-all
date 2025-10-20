import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { IonicModule } from "@ionic/angular";
import { PatientService } from 'src/app/services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [HeaderComponent, IonicModule],
})
export class HomePage implements OnInit {

  private patientService = inject(PatientService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getPatient(this.patientId as string)
  }

  patientId: string | null = '';
  patient:any = {};


  getPatient(idOfDoctor:string){
    this.patientService.getPatientById(idOfDoctor).subscribe({
      next: (patient)=>{
        this.patient = patient;
      },
      error: (err) =>{
        console.log("An error was encountered when retrieving the patient: "+ err);
      } 
    });

  }

}
