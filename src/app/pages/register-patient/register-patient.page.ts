import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.page.html',
  styleUrls: ['./register-patient.page.scss'],
  imports: [IonicModule],
})
export class RegisterPatientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
